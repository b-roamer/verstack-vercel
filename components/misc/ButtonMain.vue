<template>
  <div>
    <button class="flex justify-between border-2 border-purple hover:bg-purple text-purple hover:text-white shadow-button transition duration-300 pl-3 pr-3 pt-1 pb-1 w-52">
      {{ content }}
      <span class="inline-block align-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="align-middle"
          viewBox="0 0 15 13"
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonMain',
  props: {
    content: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style>
.shadow-button:hover {
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
}
</style>
