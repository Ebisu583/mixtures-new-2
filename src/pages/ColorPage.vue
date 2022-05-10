<template>
  <div class="page">
    <page-title>
      Color
    </page-title>
   <div v-if="isColorRange">
      <p>You've picked a great color!</p>
      <flask-item
      :color="mixtureEffectFill"
      :size="15"
      :buttonsVisible="false"
      :amount="100"
      class="flask"
      />
      <div>
        <i class="pi pi-share-alt" style="font-size: 2rem"></i>
        <InputText type="text" v-model="link" />
      </div>
    </div>
    <div v-else>
      <Message severity="error">This color is invalid</Message>
    </div>
  </div>
</template>

<script>
import PageTitle from '../components/shared/PageTitle.vue'
import FlaskItem from '../components/shared/FlaskItem.vue'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

export default {
  name: 'ColorPage',
  components: {
    PageTitle,
    FlaskItem,
    InputText,
    Message
  },
  data () {
    return {
      link: window.location.href
    }
  },
  created: function () {
    console.log(this.$route)
    const params = this.$route.params
    if (!params.red || !params.green || !params.blue) {
      this.$router.push('/')
    }
  },
  computed: {
    mixtureEffectFill () {
      return `rgb(${this.$route.params.red}, ${this.$route.params.green}, ${this.$route.params.blue})`
    },
    isColorRange () {
      const params = this.$route.params
      const isBetweenRange = color => color >= 0 && color <= 255
      return (isBetweenRange(params.red) && isBetweenRange(params.green) && isBetweenRange(params.blue))
    }
  }
}
</script>
<style scoped>
.flask {
  margin: 3rem auto;
}
</style>
