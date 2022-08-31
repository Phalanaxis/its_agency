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
  setup ({ image, id, title, price }) {
    const products = useProductsStore()
    const imageLink = computed(() => {
      if (image !== '') {
        return '../../src/assets/images/' + image
      } else return ''
    })

    function addToCart () {
      if (!products.cart.find(item => item.id === id)) {
        products.cart.push({
          'id': id,
          'amount': 1,
          'image': image,
          'title': title,
          'price': price
        })
      } else {
        products.cart.find(item => item.id === id).amount++
      }
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
    padding: 0 0 22rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 680px) {
      padding: 0 0 38px 0;
    }
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
      font-size: 16rem;
      line-height: 18rem;
      letter-spacing: 0.02em;
      margin: 16rem 0 24rem 0;
    }
    &__price-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__price {
      font-weight: 600;
      font-size: 16rem;
    }
    &__button {
      position: relative;
      width: 80rem;
      height: 32rem;
      background-color: #7BB899;
      border-radius: 8rem;
      cursor: pointer;
      opacity: 0;
      content: '';
      transition: opacity .2s;
      &::after {
        position: absolute;
        top: calc((100% - 1rem)/2);
        left: calc((100% - 12rem)/2);
        height: 2rem;
        width: 12rem;
        content: '';
        background-color: #000;
      }
      &::before {
        position: absolute;
        top: calc(50% - 5.5rem);
        left: calc(50% - 1rem);
        height: 12rem;
        width: 2rem;
        content: '';
        background-color: #000;
      }
      @media screen and (max-width: 680px) {
        opacity: 1;
        width: 40px;
        background-color: #F2F2F2;
      }
    }
  }
</style>