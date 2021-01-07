<template>
  <div id="blogPreview" class="h-screen pt-10 lg:pt-20">
    <PageTitle
      title="Пишем и рассказываем"
      description="Делимся своими знаниями и наработанным опытом..."
      button="Все статьи"
      class="mb-5 lg:mb-10"
    />

    <BlogGrid />
  </div>
</template>

<script>
import PageTitle from '../elements/PageTitle'
import BlogGrid from '../elements/BlogGrid'

export default {
  name: 'BlogPreview',
  components: {
    PageTitle,
    BlogGrid
  }
}
</script>

<style>
</style>
