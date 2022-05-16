<template>
  <Menubar :model='items' class='menu-bar' />
</template>
<script>
import Menubar from 'primevue/menubar'

export default {
  name: 'AppMenu',
  components: { Menubar },
  data: () => ({
    items: [
      {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/'
      },
      {
        label: 'Mixin',
        icon: 'pi pi-filter',
        to: '/mixin'
      },
      {
        label: 'About',
        icon: 'pi pi-info',
        to: 'about'
      },
      {
        label: 'My colors',
        icon: 'pi pi-palette',
        to: 'my-colors'
      }
    ]
  })
}
</script>
<style scoped>
.menu-bar {
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);
  /* overflow: hidden; */
}
</style>
