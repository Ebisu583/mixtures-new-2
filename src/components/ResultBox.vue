<template>
  <div>

    <!-- text between -->
    <p
      v-text="'And the result...'" />
    <flask-item
    :color="mixtureColor"
    :size="15"
    :buttonsVisible="false"
    :amount="100"
    class="flask"
     />
    <p>There are {{ amountColor }} colors in your pocket!</p>
    <p>{{ mixtureColor }}</p>
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
      <button-item
      @click="saveColor"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-pencil"
      />
  </div>
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
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'ResultsBox',
  methods: {
    saveColor () {
      this.addColor(this.mixtures)
    },
    ...mapActions(['addColor'])
  },
  computed: {
    colorLink () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${redCol}/${greenCol}/${blueCol}`
    },
    ...mapState({ colors: 'colors', mixtures: 'mixtures' }),
    ...mapGetters({ amountColor: 'amountColor', mixtureColor: 'mixtureEffectFill' })
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
