<template>
  <div class="shop__container">
    <div class="shop__switch-menu">
      <toggleSwitch class="shop__toggle" title="Новинки" @changeEvent="(prop) => onChange(prop, 'new')" />
      <toggleSwitch class="shop__toggle" title="Есть в наличии" @changeEvent="(prop) => onChange(prop, 'inStock')" />
      <toggleSwitch class="shop__toggle" title="Контрактные" @changeEvent="(prop) => onChange(prop, 'contracted')" />
      <toggleSwitch class="shop__toggle" title="Эксклюзивные" @changeEvent="(prop) => onChange(prop, 'exclusive')" />
      <toggleSwitch class="shop__toggle" title="Распродажа" @changeEvent="(prop) => onChange(prop, 'sale')" />
    </div>
    <div class="shop__list-block">
      <div class="shop__additional">
        <div class="shop__list-counter">
          {{ productsArray.length }} товаров
        </div>
        <base-select class="shop__select" @select="selectEvent" />
      </div>
      <div class="shop__list">
        <product-card 
          class="shop__list-item"
          v-for="item in productsArray"
          :key="item.id"
          :id="item.id"
          :image="item.image"
          :title="item.name"
          :price="item.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import baseSelect from '@/components/ui/baseSelect.vue'
import toggleSwitch from '@/components/ui/toggleSwitch.vue'
import ProductCard from '@/components/elements/ProductCard.vue'
import { useProductsStore } from '@/stores/products.js'
export default {
  components: {
    baseSelect,
    toggleSwitch,
    ProductCard
  },
  setup () {
    const products = useProductsStore()
    const filters = ref({
      new: false,
      inStock: false,
      contracted: false,
      exclusive: false,
      sale: false
    })
    const productsArray = ref(products.products)
    const filterValue = ref('highFirst')

    additionalFilter()

    function onChange (state, id) {
      filters.value[id] = state
      productsArray.value = products.products
      for (let key in filters.value) {
        if(filters.value[key] === true) {
          productsArray.value = productsArray.value.filter(item => item[key] === true)
        }
      }
      additionalFilter()
    }

    function additionalFilter () {
      if (filterValue.value === 'lowFirst') {
        productsArray.value.sort(function(a, b) {
          return a.price - b.price
        })
      } else if (filterValue.value === 'highFirst') {
        productsArray.value.sort(function(a, b) {
          return b.price - a.price
        })
      }
    }

    function selectEvent (value) {
      filterValue.value = value
      additionalFilter()
    }

    return {
      products,
      onChange,
      productsArray,
      filters,
      selectEvent,
      additionalFilter
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
      width: 100%;
      margin: 0 0 0 140px;
    }
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
    }
    &__list-item {

    }
    &__additional {
      display: flex;
      justify-content: space-between;
      margin: 0 0 44px 0;
    }
    &__select {
      width: 280px;
      height: 50px;
    }
    &__list-counter {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.06em;
      
    }
  }
</style>