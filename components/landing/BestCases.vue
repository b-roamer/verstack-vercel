<template>
  <div
    id="bestCases"
    class="h-screen bg-offwhite w-screen -ml-48 pr-48 pl-48 pt-20"
  >
    <PageTitle
      title="Избранные работы"
      description="Мы делаем свою работу настолько офигенно, что у нас нет конурентов"
      button="Посмотреть все"
      class="mb-10"
    />

    <section class="flex place-content-between">
      <BestCase />
      <BestCase />
      <BestCase />
    </section>
  </div>
</template>

<script>
import PageTitle from '../elements/PageTitle'
import BestCase from '../elements/BestCase'
export default {
  components: {
    PageTitle,
    BestCase
  }
}
</script>

<style>
</style>
