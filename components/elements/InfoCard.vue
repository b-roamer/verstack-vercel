<template>
  <div class="relative text-left w-full pl-5 pr-5 lg:pl-0 lg:pr-0">
    <div
      class="lg:flex bg-gray-100 min-w-full w-full h-full place-content-around py-6 lg:py-24"
    >
      <div class="lg:flex">
        <p
          class="w-full text-xl lg:text-3xl neue-bold lg:w-3/5 pl-5 place-self-center"
        >
          {{ title }}
        </p>
      </div>
      <div
        class="w-full pl-5 pr-5 text-sm lg:text-base lg:flex justify-center lg:w-3/5 place-self-center lg:pr-5"
      >
        <article>{{ content }}</article>
      </div>
    </div>

    <div
      class="text-sm -bottom-20 right-10 lg:text-base w-2/3 lg:block absolute bg-black text-white lg:w-2/5 lg:-right-12 lg:-bottom-20 lg:py-12 px-5 py-6"
    >
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
