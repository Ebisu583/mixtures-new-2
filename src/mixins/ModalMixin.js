const modalMixin = {
  data: () => ({
    modalVisible: false
  }),
  methods: {
    showModal () {
      console.log('modal')
      this.modalVisible = true
    },

    hideModal () {
      this.modalVisible = false
    }
  }
}

export default modalMixin
