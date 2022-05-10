<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />
      <app-menu />
      <slide-fade-animation>
      <!-- router view -->
      <router-view />
      </slide-fade-animation>
    </div>
  </div>
</template>

<script>
import './styles/global.scss'
import AppHeader from './components/AppHeader'
import AppMenu from './components/AppMenu.vue'
import SlideFadeAnimation from './components/shared/SlideFadeAnimation.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    SlideFadeAnimation
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
