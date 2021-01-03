<template>
  <div class="grid grid-cols-3 gap-4 h-2/3">
    <div class="col-span-2 bg-purple">
      <BlogThumbnail />
    </div>
    <div class="bg-red-400">
      <BlogThumbnail />
    </div>
    <div class="bg-indigo-600">
      <BlogThumbnail />
    </div>
    <div class="bg-yellow-400">
      <BlogThumbnail />
    </div>
    <div class="bg-green-400">
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
