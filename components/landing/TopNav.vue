<template>
  <div class="pt-5 block lg:flex justify-between">
    <a class="monex" href="#"> BEPCTAK </a>
    <div class="inline-block float-right lg:hidden" @click="toggleNavbar()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
        />
      </svg>
    </div>
    <nav
      :class="{ hidden: !isToggled }"
      class="block text-right space-y-3 lg:space-y-0 lg:space-x-20 lg:block"
    >
      <a class="block lg:inline-block" href="#">Работы</a>
      <a class="block lg:inline-block" href="#">Блог</a>
      <a class="block lg:inline-block" href="#">Процесс</a>
      <a class="block lg:inline-block" href="#">Связаться</a>
      <a class="block lg:inline-block" href="">
        Меню
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="hidden lg:inline-block"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  components: {},
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      isToggled: false
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    toggleNavbar() {
      this.isToggled = !this.isToggled
    }
  }
}
</script>

<style>
</style>
