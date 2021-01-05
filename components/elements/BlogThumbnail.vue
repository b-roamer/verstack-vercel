<template>
  <article
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    class="relative w-full h-full text-white p-5 hover:bg-black hover:bg-opacity-20 transition duration-300"
  >
    <a
      href=""
      class="text-3xl w-1/2 underline hover:no-underline"
    >
      Статья про что-то очень крутое
    </a>

    <p class="mt-3 neue-light">
      Начальный текст, для того чтобы зацепить
    </p>

    <div class="absolute bottom-5">
      <a
        href=""
        class="underline hover:no-underline"
      >
        Читать полностью
      </a>
      <div class="mt-3">
        <Category text="Дизайн" />
        <Category text="Web" />
      </div>
    </div>
  </article>
</template>

<script>
import Category from './Category'

export default {
  name: 'BlogThumbnail',
  components: {
    Category
  },
  props: {
    image: {
      type: String,
      default: 'blog1'
    }
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    imageUrl() {
      return require(`../../assets/img/${this.image}.png`)
    }
  }
}
</script>

<style>
</style>
