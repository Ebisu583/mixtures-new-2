<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="increment"
      @decrement="decrement" />

    <!-- result box -->
    <result-box
      @refresh="refresh"
     />

  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ColorMixin',
  data: () => ({
  }),
  methods: {
    refresh () {
      this.mixtures = this.mixtures.map(item => ({ ...item, amount: 50 }))
    },
    ...mapMutations({ increment: 'INCREMENT_COLOR', decrement: 'DECREMENT_COLOR' })
  },
  computed: {
    ...mapState(['mixtures'])
  },
  components: {
    MixturesList,
    ResultBox
  }
}
</script>
