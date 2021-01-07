<template>
  <section class="lg:flex place-content-between">
    <div class="mb-2">
      <h2 class="neue-bold w-1/2 text-3xl lg:text-5xl mb-2 lg:mb-5">
        {{ title }}
      </h2>
      <article class="neue-light w-full lg:w-96">
        {{ description }}
      </article>
    </div>

    <ButtonMain :content="button" />
  </section>
</template>

<script>
import ButtonMain from './ButtonMain'

export default {
  name: 'PageTitle',
  components: {
    ButtonMain
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'This is a test that describes the content of the section.'
    },
    button: {
      type: String,
      default: 'Button text'
    }
  }
}
</script>

<style>
</style>
