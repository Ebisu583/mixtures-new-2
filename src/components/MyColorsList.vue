<template>
  <div>
    <ul class="mixtures">
      <li
        :key="index"
        v-for="(color, index) in colors">
        <flask-item
          :color="color"
          :buttonsVisible="false"
          :removeVisible="true"
          @remove="removeColor(index)"/>
      </li>
    </ul>
     <message v-if="colors.length == 0" severity="warn" class="animate__animated animate__shakeY animate__delay-2s">No colors yet!</message>
    <!-- <flask-item :color=""/> -->
  </div>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import { mapGetters, mapMutations } from 'vuex'
import Message from 'primevue/message'
export default {
  components: { FlaskItem, Message },
  name: 'MyColorsList',
  methods: {
    ...mapMutations({ removeColor: 'REMOVE_COLOR' })
  },
  computed: mapGetters({ colors: 'RGBColors' })
}
</script>
<style lang='scss' scoped>
.mixtures {
  list-style: none;
  li {
    display: inline-block;
    margin: 0 48px;
  }
}
</style>
