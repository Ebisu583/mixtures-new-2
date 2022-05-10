<template>
  <div class="page">
    <h1>About</h1>
    <img ref="img" src="@/assets/Logo.svg" class='animate__animated animate__jackInTheBox' @click="shake">
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data: () => ({
    isAnimated: true
  }),
  methods: {
    shake () {
      this.$refs.img.classList.remove('animate__jackInTheBox')
      setInterval(() => {
        this.$refs.img.classList.add('animate__jackInTheBox')
      }, 100)
    }
  }
}
</script>
