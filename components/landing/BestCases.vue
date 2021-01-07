<template>
  <div
    id="bestCases"
    class="h-full pb-0.5 lg:pb-0 lg:h-screen bg-offwhite -mr-5 -ml-5 pl-5 pr-5 pt-10 lg:w-screen lg:-ml-48 lg:pr-48 lg:pl-48 lg:pt-20"
  >
    <PageTitle
      title="Избранные работы"
      description="Мы делаем свою работу настолько офигенно, что у нас нет конурентов"
      button="Посмотреть все"
      class="mb-5"
    />

    <section class="lg:flex place-content-between">
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
