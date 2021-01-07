<template>
  <div
    class="h-screen flex flex-col justify-center items-center lg:flex lg:items-center lg:flex-row lg:pt-0"
  >
    <div>
      <img src="~/assets/img/start1.png" alt="about" />
    </div>
    <article class="mt-10 lg:mt-0 lg:w-1/2">
      <nuxt-link to="/" class="text-3xl lg:text-7xl mb-5 hover:underline">
        Начать проект
        <img class="w-5 lg:w-10 inline-block" src="~/assets/img/next.svg" />
        <!-- <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="40"
          viewBox="0 0 477.175 477.175"
          xml:space="preserve"
          class="inline-block"
        >
          <path
            d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
          />
        </svg> -->
      </nuxt-link>
      <p>
        Расскажите о проекте за <span class="underline">60 секунд</span> или за
        <span class="underline">3 шага!</span>
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'StartProject'
}
</script>

<style>
</style>
