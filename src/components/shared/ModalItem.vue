<template>
  <div class="fog">
    <div class="modal">

      <header>
        <h1>
          <slot name="header" />
        </h1>
      </header>

      <div class="modal__body">
        <slot name="body" />
      </div>

      <footer>
        <slot name="footer" />
        <button-item @click="$emit('cancel')" icon="pi-times" />
      </footer>

    </div>
  </div>
</template>
<script>
import ButtonItem from './ButtonItem.vue'
export default {
  name: 'ModalItem',
  components: { ButtonItem }
}
</script>
<style lang='scss' scoped>
.fog {
  background-color: #21D4FD;
  background-image: $main-gradient;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.modal {
  max-width: 20rem;
  padding: 20px;
  background: #fff;
  margin: auto auto;
  border-radius: 2rem;
  box-shadow: 0 0 20px 20px rgba(0,0,0,0.1);
  color: #637892;

  &__body {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  &__footer {
    button {
      margin: 0.5rem;
    }
  }
}
</style>
