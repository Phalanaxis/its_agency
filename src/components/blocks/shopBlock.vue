<template>
  <div class="shop__container">
    <div class="shop__switch-menu">
      <toggleSwitch class="shop__toggle" title="Новинки" />
      <toggleSwitch class="shop__toggle" title="Есть в наличии" />
      <toggleSwitch class="shop__toggle" title="Контрактные" />
      <toggleSwitch class="shop__toggle" title="Эксклюзивные" />
      <toggleSwitch class="shop__toggle" title="Распродажа" />
    </div>
    <div class="shop__list-block">
      <div class="shop__list-counter">
        товаров
      </div>
      <div class="shop__list">
        <div 
          class="shop__list-item"
          v-for="item in products.products"
          :key="item.id"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toggleSwitch from '@/components/ui/toggleSwitch.vue'

import { useProductsStore } from '@/stores/products.js'

export default {
  components: {
    toggleSwitch
  },
  setup () {
    const products = useProductsStore()

    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped>
  .shop {
    &__container {
      display: flex;
    }
    &__switch-menu {

    }
    &__toggle {
      &:not(:last-child) {
        margin: 0 0 10px 0;
      }
    }
    &__list-block {
      margin: 0 0 0 140px;
    }
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
    }
    &__list-item {

    }
    &__list-counter {

    }
  }
</style>