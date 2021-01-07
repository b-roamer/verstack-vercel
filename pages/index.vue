<template>
  <div>
    <TopNav />
    <Greeting />
    <Clients />
    <BestCases />
    <BlogPreview />
    <About />
    <StartProject />
    <Footer />
  </div>
</template>

<script>
import TopNav from '../components/landing/TopNav'
import Greeting from '../components/landing/Greeting'
import Clients from '../components/landing/Clients'
import BestCases from '../components/landing/BestCases'
import BlogPreview from '../components/landing/BlogPreview'
import About from '../components/landing/About'
import StartProject from '../components/landing/StartProject'
import Footer from '../components/elements/Footer'

export default {
  components: {
    TopNav,
    Greeting,
    Clients,
    BestCases,
    BlogPreview,
    About,
    StartProject,
    Footer
  }
}
</script>

<style>
</style>
