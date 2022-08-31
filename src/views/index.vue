<template>
  <div>
    <swiper-block />
    <shop-block class="shop-block" />
  </div>
</template>

<script>
import swiperBlock from '@/components/blocks/swiperBlock.vue'
import shopBlock from '@/components/blocks/shopBlock.vue'
export default {
  components: {
    swiperBlock,
    shopBlock
  }
}
</script>

<style lang="scss" scoped>
  .shop-block {
    padding: 70px 65px 150px 65px;
  }
  // .home-page {
  //   &__swiper-block {
  //     width: 100%;
  //     height: 560px;
  //   }
  // }
</style>