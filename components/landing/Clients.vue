<template>
  <div class="h-screen min-h-500 grid grid-cols-1">
    <div class="-ml-5 -mr-5 lg:block lg:-ml-44 lg:-mr-44">
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
        <div slot="button-prev" class="hidden lg:block swiper-button-prev" />
        <div slot="button-next" class="hidden lg:block swiper-button-next" />
        <div slot="pagination" class="block lg:hidden swiper-pagination" />
      </swiper>
    </div>

    <div>
      <ClientsLogos />
    </div>
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
        spaceBetween: 500,
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 1024px) {
  .swiper {
    height: 500px !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
.swiper {
  width: 100%;
  height: 500px;
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

.swiper-pagination >>> .swiper-pagination-bullet {
  opacity: 1;
  border: rgb(0, 0, 0) solid 1px;
  background-color: transparent;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: rgb(0, 0, 0);
}
</style>
