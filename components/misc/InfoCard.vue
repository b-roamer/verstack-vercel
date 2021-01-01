<template>
  <div class="relative text-left w-full">
    <div class="flex bg-gray-100 min-w-full w-full h-full place-content-around py-24">
      <div class="flex">
        <p class="text-3xl neue-bold w-3/5 pl-5 place-self-center">
          {{ title }}
        </p>
      </div>
      <div class="flex justify-center w-3/5 place-self-center">
        <article>{{ content }}</article>
      </div>
    </div>

    <div class="absolute bg-black text-white w-1/2 -right-12 -bottom-20 py-12 px-5">
      {{ secondary }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    content: {
      type: String,
      default:
        'This is a default content used in the main body of the info card.'
    },
    secondary: {
      type: String,
      default:
        'This is a secondary content used in the secondary body of the info card.'
    }
  }
}
</script>

<style>
</style>
