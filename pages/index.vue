<template>
  <div>
    <TopNav />
    <Greeting />
    <Clients />
    <BestCases />
    <BlogPreview />
  </div>
</template>

<script>
import TopNav from '../components/landing/TopNav'
import Greeting from '../components/landing/Greeting.vue'
import Clients from '../components/landing/Clients.vue'
import BestCases from '../components/landing/BestCases'
import BlogPreview from '../components/landing/BlogPreview'

export default {
  components: {
    TopNav,
    Greeting,
    Clients,
    BestCases,
    BlogPreview
  }
}
</script>

<style>
</style>
