<template>
  <header>
    <h1
      class="heading"
      v-text="'RGB Color Mixture'" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang='scss' scoped>
.heading {
  font-size: 3rem;
  background-color: #21D4FD;
  background-image: $main-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
