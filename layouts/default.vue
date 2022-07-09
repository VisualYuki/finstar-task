<template>
  <div class="layout">
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
.layout {
  width: 100vw;
  padding: 20px;

  /*display: flex;
  align-items: center;
  justify-content: center;*/
}

.d-none {
  display: none;
}
</style>
