<template>
  <div class="page">
    <h1>Home</h1>
    <message severity="warn" class="animate__animated animate__shakeY animate__delay-2s">Welcome to PrimeVue</message>
  </div>
</template>
<script>
import Message from 'primevue/message'

export default {
  name: 'HomePage',
  components: {
    Message
  }
}
</script>
