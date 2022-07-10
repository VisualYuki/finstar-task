<template>
  <div>
    <v-btn
      elevation="2"
      @click="getTodos"
      class="my-4"
      style="margin-bottom: 40px"
    >
      Load data
      <v-progress-circular
        indeterminate
        color="primary"
        v-show="isLoading"
      ></v-progress-circular>
    </v-btn>
    <v-row>
      <v-col
        v-for="(todoUser, index) in todoUsers"
        :key="index"
        cols="12"
        sm="4"
        style="max-height: 250px; overflow-y: scroll"
      >
        <v-card elevation="2" class="ma-4">
          <v-card-title style="justify-content: space-between">
            User {{ todoUser.userId }}

            <div>
              <span style="color: green">{{ todoUser.completed }} </span>
              /
              <span style="color: red">{{ todoUser.uncompleted }}</span>
            </div>
          </v-card-title>
          <v-card-text>
            <ul style="margin-left: 20px">
              <li v-for="(title, index) in todoUser.titles" :key="index">
                {{ title }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="isReadyChartData" style="width: 300px; margin-top: 50px">
      <Bar :chart-data="chartData" />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'IndexPage',
  components: { Bar },
  data() {
    return {
      todoUsers: [],
      isLoading: false,
      isReadyChartData: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Completed',
            backgroundColor: '#f87979',
            data: [],
          },
          {
            label: 'Uncompleted',
            backgroundColor: '#0000ff',
            data: [],
          },
        ],
      },
    }
  },
  methods: {
    async getTodos() {
      this.isLoading = true
      this.todoUsers = []
      const apiTodos = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/todos'
      )

      this.formatTodos(apiTodos)
    },

    formatTodos(apiTodos) {
      // Использовал упрощение, что объекты одного userId отсортированы в массиве.
      let currentUserId
      let currentArrayIndex = -1

      // из [{userId: 1, title: "title1", completed: boolean}, {userId:1, title: "title2", ...}, ...] делаем [{userId: 1, titles: ["title1", "title2"], completed: 0, uncompleted: 0}, ...]
      apiTodos.forEach((todo) => {
        if (todo.userId !== currentUserId) {
          this.todoUsers.push({
            userId: todo.userId,
            completed: 0,
            uncompleted: 0,
            titles: [],
          })
          currentUserId = todo.userId
          currentArrayIndex++
        }

        this.todoUsers[currentArrayIndex].titles.push(todo.title)

        if (todo.completed) {
          this.todoUsers[currentArrayIndex].completed++
        } else {
          this.todoUsers[currentArrayIndex].uncompleted++
        }
      })

      // сортировка по числу выполненых задач
      this.todoUsers.sort((todoUser1, todoUser2) => {
        if (todoUser1.completed > todoUser2.completed) {
          return -1
        } else if (todoUser1.completed < todoUser2.completed) {
          return 1
        } else {
          // сортировка при одинковых выполненных задач идет по возрастанию.
          if (todoUser1.userId < todoUser2.userId) {
            return -1
          } else {
            return 1
          }
        }
      })

      this.setDataChart()

      this.isLoading = false
    },

    setDataChart() {
      this.todoUsers.forEach((todoUser) => {
        this.chartData.labels.push('User ' + todoUser.userId)
        this.chartData.datasets[0].data.push(todoUser.completed)
        this.chartData.datasets[1].data.push(todoUser.uncompleted)
      })

      this.isReadyChartData = true
    },
  },
}
</script>
