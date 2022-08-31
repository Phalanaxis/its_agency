<template>
  <div class="page-container">
    <bread-crumbs class="page-container__breadcrumbs" :breadcrumbs="breadcrumbs" />
    <swiper-block class="page-container__swiper-block" />
    <shop-block class="page-container__shop-block" />
  </div>
</template>

<script>
import breadCrumbs from '@/components/ui/breadCrumbs.vue'
import swiperBlock from '@/components/blocks/swiperBlock.vue'
import shopBlock from '@/components/blocks/shopBlock.vue'
export default {
  components: {
    breadCrumbs,
    swiperBlock,
    shopBlock
  },
  setup () {
    const breadcrumbs = [
      {
        'title': 'ГЛАВНАЯ',
        'url': '/'
      },
      {
        'title': 'ПРОДУКТЫ',
        'url': '/'
      },
      {
        'title': 'КРАСКИ',
        'url': '/'
      }
    ]
    return {
      breadcrumbs
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-container {
    position: relative;
    &__breadcrumbs {
      position: absolute;
      z-index: 2;
      margin: 32rem 0 0 64rem;
      @media screen and (max-width: 680px) {
        margin: 17px 0 0 24px;
      }
    }
    &__swiper-block {
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
    &__shop-block {
      padding: 70rem 65rem 150rem 65rem;
      @media screen and (max-width: 680px) {
        padding: 16px 25px 50px 25px;
      }
    }
  }
</style>