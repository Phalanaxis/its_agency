<template>
  <div class="shop__container">
    <h4 class="shop__mobile-title">Краски</h4>
    <div :class="{'shop__switch-menu': true, 'shop__switch-menu-active': isOpened}">
      <div class="shop__mobile-closer" @click="openFilters()" />
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
        <div class="shop__filters-button" @click="openFilters()">
          Фильтры
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
    <div v-if="isOpened" class="shop__background" />
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
    const isOpened = ref(false)
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

    function openFilters() {
      isOpened.value = !isOpened.value
    }

    return {
      products,
      onChange,
      productsArray,
      filters,
      selectEvent,
      additionalFilter,
      isOpened,
      openFilters
    }
  }
}
</script>

<style lang="scss" scoped>
  .shop {
    &__container {
      display: flex;
      @media screen and (max-width: 680px) {
        flex-direction: column;
      }
    }
    &__mobile-title {
      @media screen and (min-width: 681px) {
        display: none;
      }
      font-weight: 400;
      font-size: 36px;
      letter-spacing: -0.04em;
      margin: 48px 0;
    }
    &__switch-menu {
      width: 20%;
      background-color: #FFF;
      @media screen and (max-width: 680px) {
        position: fixed;
        width: 100%;
        height: 80%;
        padding: 54px 24px;
        z-index: 3;
        left: 0;
        bottom: -80%;
        border-radius: 24px 24px;
        transition: bottom .3s;
      }
      &-active {
        @media screen and (max-width: 680px) {
          bottom: 0;
        }
      }
    }
    &__mobile-closer {
      @media screen and (min-width: 681px) {
        display: none;
      }
      position: absolute;
      top: 12px;
      left: calc(50% - 14px);
      width: 24px;
      height: 4px;
      background-color: rgba(31, 32, 32, 0.6);
      border-radius: 40px;
      cursor: pointer;
    }
    &__toggle {
      &:not(:last-child) {
        margin: 0 0 10rem 0;
      }
    }
    &__list-block {
      width: 80%;
      @media screen and (max-width: 680px) {
        width: 100%;
      }
    }
    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 25rem;
      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    &__additional {
      display: flex;
      justify-content: space-between;
      margin: 0 0 44rem 0;
    }
    &__select {
      width: 280rem;
      height: 50rem;
    }
    &__list-counter {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12rem;
      line-height: 15rem;
      letter-spacing: 0.06em;
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
    &__filters-button {
      @media screen and (min-width: 681px) {
        display: none;
      }
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 0.06em;
      cursor: pointer;
    }
    &__background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 2;
      
    }
  }
</style>