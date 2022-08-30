<template>
  <swiper-block />
</template>

<script>
import swiperBlock from '@/components/blocks/swiperBlock.vue'
export default {
  components: {
    swiperBlock
  }
}
</script>

<style lang="scss" scoped>
  .home-page {
    &__swiper-block {
      width: 100%;
      height: 560px;
    }
  }
</style>