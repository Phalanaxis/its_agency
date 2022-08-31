<template>
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" :src="imageLink" />
    </div>
    <div class="card__title">
      {{ title }}
    </div>
    <div class="card__price-container">
      <div class="card__price">
        {{ price + ' &#8381;' }}
      </div>
      <div class="card__button" @click="addToCart()" />
    </div>
  </div>
</template>

<script>
import { useProductsStore } from '@/stores/products.js'
import { computed } from 'vue'
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: '0'
    },
    id: {
      type: Number,
      default: ''
    }
  },
  setup ({ image, id }) {
    const products = useProductsStore()
    const imageLink = computed(() => {
      if (image !== '') {
        return '../../src/assets/images/' + image
      } else return ''
    })

    function addToCart () {
      products.cart.push({'id': id, 'amount': 1})
    }
    return {
      products,
      imageLink,
      addToCart
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    &:hover {
      .card__button {
        opacity: 1;
      }
    }
    &__image-container {
      position: relative;
      width: 100%;
      padding-bottom: 100%;
    }
    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__title {
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.02em;
      margin: 16px 0 24px 0;
    }
    &__price-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__price {
      font-weight: 600;
      font-size: 16px;
    }
    &__button {
      position: relative;
      width: 80px;
      height: 32px;
      background-color: #7BB899;
      border-radius: 8px;
      cursor: pointer;
      opacity: 0;
      content: '';
      transition: opacity .2s;
      &::after {
        position: absolute;
        top: calc((100% - 1px)/2);
        left: calc((100% - 12px)/2);
        height: 2px;
        width: 12px;
        content: '';
        background-color: #000;
      }
      &::before {
        position: absolute;
        top: calc(50% - 5.5px);
        left: calc(50% - 1px);
        height: 12px;
        width: 2px;
        content: '';
        background-color: #000;
      }
    }
  }
</style>