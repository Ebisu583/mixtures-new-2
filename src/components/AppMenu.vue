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
        icon: 'pi pi-home'
      },
      {
        label: 'Mixin',
        icon: 'pi pi-filter'
      },
      {
        label: 'About',
        icon: 'pi pi-info'
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
