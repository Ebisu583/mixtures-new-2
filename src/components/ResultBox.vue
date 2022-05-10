<template>
  <div>

    <!-- text between -->
    <p
      v-text="'And the result...'" />
    <flask-item
    :color="mixtureEffectFill"
    :size="15"
    :buttonsVisible="false"
    :amount="100"
    class="flask"
     />

    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-sync"
      />
      <!-- question btn -->
    <button-item
      @click="showModal"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-question"
      />
      <router-link :to="colorLink">
      <button-item
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-share-alt"
      />
      </router-link>
  </div>
  <p>{{ mixtureEffectFill }}</p>
  <fade-animation>
    <modal-item
    v-if="modalVisible"
    @cancel="hideModal">

      <template v-slot:header>
        About the app
      </template>

      <template v-slot:body>
        Mix three colors to create the perfect one!
      </template>

      <template v-slot:footer>
          <button-item icon="pi-thumbs-up" />
      </template>
    </modal-item>
  </fade-animation>
</template>

<script>
import FlaskItem from './shared/FlaskItem.vue'
import ButtonItem from './shared/ButtonItem.vue'
import ModalItem from './shared/ModalItem.vue'
import ModalMixin from '../mixins/ModalMixin'
import FadeAnimation from './shared/FadeAnimation.vue'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    colorLink () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${redCol}/${greenCol}/${blueCol}`
    }
  },
  components: {
    FlaskItem,
    ButtonItem,
    ModalItem,
    FadeAnimation
  },
  mixins: [ModalMixin]
}
</script>
<style scoped>
.flask {
  margin: 3rem auto;
}
</style>
