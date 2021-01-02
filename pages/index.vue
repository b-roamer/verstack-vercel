<template>
  <div>
    <TopNav />
    <Greeting />
    <Clients />
    <BestCases />
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import Greeting from '../components/Greeting.vue'
import Clients from '../components/Clients.vue'
import BestCases from '../components/BestCases'

export default {
  components: {
    TopNav,
    Greeting,
    Clients,
    BestCases
  }
}
</script>

<style>
</style>
