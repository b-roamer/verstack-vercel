<template>
  <div>
    <TopNav />
    <Greeting />
    <Clients />
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import Greeting from '../components/Greeting.vue'
import Clients from '../components/Clients.vue'

export default {
  components: {
    TopNav,
    Greeting,
    Clients
  }
}
</script>

<style>
</style>
