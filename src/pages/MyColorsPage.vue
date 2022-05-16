<template>
<page-title>
  My colors
  </page-title>
  <my-colors-list />
</template>
<script>
import PageTitle from '../components/shared/PageTitle.vue'
import { mapState } from 'vuex'
import MyColorsList from '../components/MyColorsList.vue'

export default {
  name: 'MyColorsPage',
  components: {
    PageTitle,
    MyColorsList
  },
  computed: mapState(['colors'])
}
</script>
