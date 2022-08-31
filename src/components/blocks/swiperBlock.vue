<template>
  <div class="swiper__block">
    <div class="swiper__text-box">
      <h1 class="swiper__title" >Краски</h1>
      <div class="swiper__text">Идеально подходят для стен и других поверхностей.<br> Найди свой идеальный цвет!</div>
    </div>
    <swiper
      class="swiper__container"
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      navigation
      :pagination="{ el: '.swiper-pagination', type: 'bullets', clickable: true }"
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
      <div class="swiper-pagination__container">
        <div class="swiper-pagination" />
      </div>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup () {
    return {
      modules: [Navigation, Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper {
    &__block {
      width: 100%;
      height: 560rem;
      position: relative;
    }
    &__container {
      height: 100%;
      position: relative;
    }
    &__text-box {
      z-index: 2;
      position: absolute;
      width: 100%;
      top: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #FFF;
      pointer-events: none;
    }
    &__title {
      font-weight: 400;
      font-size: 72rem;
      line-height: 64rem;
      letter-spacing: -0.02em;
    }
    &__text {
      font-weight: 500;
      font-size: 16rem;
      margin: 24rem 0 0 0;
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
  .swiper-pagination{
    width: auto;
    display: flex;
    position: relative;
    bottom: 0;
    padding: 13rem 24rem;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    &__container {
      position: absolute;
      width: 100%;
      bottom: 40rem;
      display: flex;
      justify-content: center;
    }
    &:deep(.swiper-pagination-bullet) {
      background-color: #FFF;
    }
  }
  :deep(.swiper-button-prev) {
    color: #FFF;
    left: 20%;
    top: 75%;
  }
  :deep(.swiper-button-next) {
    color: #FFF;
    right: 20%;
    top: 75%;
  }
  :deep(.swiper-button-disabled) {
    display: none;
  }
</style>