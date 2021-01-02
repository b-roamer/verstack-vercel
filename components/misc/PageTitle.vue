<template>
  <section class="flex place-content-between">
    <div>
      <h2 class="neue-bold text-5xl mb-5">
        {{ title }}
      </h2>
      <article class="neue-light w-96">
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
