<template>
  <div class="h-screen">
    <div class="hidden lg:block lg:-ml-44 lg:-mr-44">
      <swiper class="swiper h-96" :options="swiperOption">
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
        <div slot="button-prev" class="swiper-button-prev animate-pulse" />
        <div slot="button-next" class="swiper-button-next animate-pulse" />
      </swiper>
    </div>

    <div class="lg:hidden lg:-ml-44 lg:-mr-44">
      <swiper class="swiper swiper-mob" :options="swiperOption">
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
        <div slot="pagination" class="swiper-pagination" />
      </swiper>
    </div>

    <ClientsLogos />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import InfoCard from '../elements/InfoCard'
import ClientsLogos from '../elements/ClientsLogos'

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
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  padding-left: 11rem;
  padding-right: 11rem;
}

.swiper-mob {
  height: 500px;
  width: 100%;
  padding-left: 0rem !important;
  padding-right: 0rem !important;
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

.swiper-pagination >>> .swiper-pagination-bullet {
  opacity: 1;
  border: rgb(0, 0, 0) solid 1px;
  background-color: transparent;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: rgb(0, 0, 0);
}
</style>
