<template>
  <div class="neue-light text-sm text-white inline-block bg-black bg-opacity-10 pr-3 pl-3 mr-3">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    text: {
      type: String,
      default: 'Category'
    }
  }
}
</script>

<style>
</style>
