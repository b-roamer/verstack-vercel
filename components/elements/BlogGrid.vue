<template>
  <div
    class="flex h-2/3 overflow-x-scroll pl-5 pr-5 md:pl-0 md:pr-0 -mr-5 -ml-5 md:ml-0 md:mr-0 md:grid md:grid-cols-3 gap-5 md:h-2/3"
  >
    <div class="col-span-2 bg-purple min-w-3/4 mr-5 md:mr-0">
      <BlogThumbnail />
    </div>
    <div class="bg-red-400 min-w-3/4 mr-5 md:mr-0">
      <BlogThumbnail />
    </div>
    <div class="bg-indigo-600 min-w-3/4 mr-5 md:mr-0">
      <BlogThumbnail />
    </div>
    <div class="bg-yellow-400 min-w-3/4 mr-5 md:mr-0">
      <BlogThumbnail />
    </div>
    <div class="bg-green-400 min-w-3/4 mr-5 md:mr-0">
      <BlogThumbnail />
    </div>
  </div>
</template>

<script>
import BlogThumbnail from './BlogThumbnail'

export default {
  name: 'BlogGrid',
  components: {
    BlogThumbnail
  }
}
</script>

<style>
</style>
