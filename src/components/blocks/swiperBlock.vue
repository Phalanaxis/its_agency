<template>
  <div class="swiper__block">
    <div class="swiper__text-box">
      <h1 class="swiper__title" >Краски</h1>
      <div class="swiper__text">Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!</div>
    </div>
    <swiper
      class="swiper__container"
      :slides-per-view="1"
      :space-between="0"
      :pagination="{ clickable: true}"
    >
      <swiper-slide class="swiper__slide">
        <img class="swiper__slide-image" src="@/assets/images/slide.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper__slide-image" src="@/assets/images/slide.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper__slide-image" src="@/assets/images/slide.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper__slide-image" src="@/assets/images/slide.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper__slide-image" src="@/assets/images/slide.png" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper__slide-image" src="@/assets/images/slide.png" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper {
    &__block {
      width: 100%;
      height: 560px;
      position: relative;
    }
    &__container {
      height: 100%;
      position: relative;
    }
    &__text-box {
      z-index: 2;
      position: absolute;
      width: 28%;
      top: 40%;
      left: 37.5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #FFF;
    }
    &__title {
      font-weight: 400;
      font-size: 72px;
      line-height: 64px;
      letter-spacing: -0.02em;
    }
    &__text {
      margin: 24px 0 0 0;
      text-align: center;
    }
    &__slide {
      width: 100%;
      height: 100%;
      &-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>