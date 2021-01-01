<template>
  <div class="h-screen">
    <div class="-m-44">
      <swiper
        class="swiper cursor-move"
        :options="swiperOption"
      >
        <swiper-slide>
          <InfoCard
            title="Коротко про нас..."
            content="Верстак - это сплочённая команда высококлассных специалистов, способных решать задачи любой сложности в области разработки веб-сайтов и мобильных приложений."
            secondary="Реализовываем самые сложные интернет-проекты полностью своими силами."
          />
        </swiper-slide>
        <swiper-slide>
          <InfoCard />
        </swiper-slide>
        <swiper-slide>
          <InfoCard />
        </swiper-slide>
        <div
          slot="button-prev"
          class="swiper-button-prev animate-pulse"
        />
        <div
          slot="button-next"
          class="swiper-button-next animate-pulse"
        />
      </swiper>
    </div>

    <ClientsLogos />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import InfoCard from './misc/InfoCard'
import ClientsLogos from './misc/ClientsLogos'

export default {
  components: {
    InfoCard,
    Swiper,
    SwiperSlide,
    ClientsLogos
  },
  directives: {
    swiper: directive
  },
  /* eslint-disable space-before-function-paren */
  data() {
    return {
      swiperOption: {
        spaceBetween: 1000,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper {
  height: 500px;
  width: 100%;
  padding-left: 11rem;
  padding-right: 11rem;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.swiper-button-next {
  color: black;
  padding-right: 5rem;
}

.swiper-button-prev {
  color: black;
  padding-left: 5rem;
}
</style>
