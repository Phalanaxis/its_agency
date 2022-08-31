<template>
  <header class="header__container">
    <div class="header__part-box-left">
      <div class="header__mobile-burger">
        <div class="header__mobile-burger-part" />
        <div class="header__mobile-burger-part" />
        <div class="header__mobile-burger-part" />
      </div>
      <router-link class="header__logo-link" to="/">
        <logo class="header__logo" />
      </router-link>
      <nav class="header__nav">
        <router-link
          class="header__nav-link"
          v-for="(item) in navigations"
          :key="item.title"
          :to="item.link"
        >
          {{ item.title }}
        </router-link>
      </nav>
    </div>
    <div class="header__part-box-right">
      <a href="tel:+74952217769" class="header__phone-container">
        <div class="header__phone-number">+7 (495) 221-77-69</div>
        <div class="header__phone-text">Заказать звонок</div>
      </a>
      <div class="header__icons">
        <search  class="header__icon" />
        <profile class="header__icon" />
        <heart class="header__icon" />
        <div class="header__cart-badge" @click="openCart()">
          {{ calculateCart() }}
        </div>
      </div>
    </div>
    <div :class="{'header__cart': true, 'header__cart-active': isOpened}">
      <div class="header__cart-top">
        <h4 class="header__title">Корзина</h4>
        <div class="header__cross-container" @click="openCart()">
          <div class="header__cross" />
        </div>
      </div>
      <div class="header__cart-header">
        <div class="header__cart-counter">
          {{ calculateCart() }} товаров
        </div>
        <div class="header__cart-cleaner" @click="clearCart()">
          очистить список
        </div>
      </div>
      <div class="header__cart-list">
        <div
          class="header__cart-item"
          v-for="item in products.cart"
          :key="item.id"
        >
          <div class="header__cart-image-container">
            <img class="header__cart-image" :src="imageLink(item.image)" />
          </div>
          <div class="header__cart-item-info">
            <div class="header__cart-item-title">
              {{ item.title }}
            </div>
            <div class="header__cart-item-price">
              {{ item.price*item.amount + ' &#8381;' }}
            </div>
          </div>
          <div class="header__cart-amount-box">
            <div class="header__cart-amount-minus" @click="decreaseAmount(item.id)" />
            <div class="header__cart-amount">
              {{ item.amount }}
            </div>
            <div class="header__cart-amount-plus" @click="increaseAmount(item.id)" />
          </div>
          <div class="header__cross header__cross-modified" @click="deleteFromCart(item.id)" />
        </div>
      </div>
      <div v-if="products.cart.length > 0" class="header__final-price-container">
        <div class="header__final-price-box">
          <div class="header__total-text">
            Итого
          </div>
          <div class="header__total-price">
            {{ calculateTotal()  + ' &#8381;' }}
          </div>
        </div>
        <div class="header__purchase-button">
          оформить заказ
        </div>
      </div>
    </div>
    <div :class="{'header__background': true, 'header__background-inactive': !isOpened}" />
  </header>
</template>
<!-- @media screen and (max-width: 680px) {} -->
<script>
import { ref } from 'vue'
import Logo from '@/assets/svg/Logo.vue'
import Search from '@/assets/svg/Search.vue'
import Profile from '@/assets/svg/Profile.vue'
import Heart from '@/assets/svg/Heart.vue'
import { useProductsStore } from '@/stores/products.js'
export default {
  components: {
    Logo,
    Search,
    Profile,
    Heart
  },
  props: {
    navigations: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const products = useProductsStore()
    const isOpened = ref(false)

    function imageLink (image) {
      if (image !== '') {
        return '../../src/assets/images/' + image
      } else return ''
    }

    function openCart () {
      isOpened.value = !isOpened.value
    }
    function calculateCart () {
      let amount = 0
      products.cart.forEach(item => {
        amount = amount + item.amount
      })
      return amount
    }

    function clearCart () {
      products.cart = []
    }

    function decreaseAmount (id) {
      if (products.cart.find(item => item.id === id).amount !== 1) {
        products.cart.find(item => item.id === id).amount--
      } else {
        products.cart = products.cart.filter(item => item.id !== id)
      }
    }

    function increaseAmount (id) {
      products.cart.find(item => item.id === id).amount++
    }

    function deleteFromCart (id) {
      products.cart = products.cart.filter(item => item.id !== id)
    }

    function calculateTotal() {
      let totalPrice = 0
      products.cart.map(item => {
        totalPrice = totalPrice + item.price * item.amount
      })
      return totalPrice
    }

    return {
      isOpened,
      openCart,
      imageLink,
      calculateCart,
      products,
      clearCart,
      decreaseAmount,
      increaseAmount,
      deleteFromCart,
      calculateTotal
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    &__container {
      width: 100%;
      height: 104rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2.5%;
      @media screen and (max-width: 680px) {
        height: 64px;
        padding: 0;
        margin: 0 24px;
        width: calc(100% - 48px);
        border-bottom: 1px solid rgba(31, 32, 32, 0.06);
      }
    }
    &__part-box-left {
      min-width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 680px) {
        min-width: 60%;
      }
    }
    &__part-box-right {
      min-width: 40%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    &__logo {
      width: 130rem;
      @media screen and (max-width: 680px) {
        width: 100px;
      }
    }
    &__nav {
      @media screen and (max-width: 680px) {
        display: none;
      }
      &-link {
        white-space: nowrap;
        text-decoration: none;
        font-size: 14rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #000;
        transition: color .3s;
        &:not(:last-child) {
          margin: 0 24rem 0 0;
        }
        &:hover {
          color: #7BB899;
        }
      }
    }
    &__phone {
      &-container {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        margin: 0 110rem 0 0;     
        @media screen and (max-width: 680px) {
          display: none;
        }
      }
      &-number {
        color: #000;
        white-space: nowrap;
        font-weight: 500;
        font-size: 16rem;
        letter-spacing: -0.02em;
      }
      &-text {
        cursor: pointer;
        font-size: 14rem;
        color: rgba(31, 32, 32, 0.3);
      }
    }
    &__icons {
      display: flex;
      align-items: center;
    }
    &__icon {
      cursor: pointer;
      width: 22rem;
      height: 22rem;
      &:not(:last-child) {
        margin: 0 26rem 0 0;
      }
      @media screen and (max-width: 680px) {
        display: none;
      }
    }
    &__cart-badge {
      width: 24rem;
      height: 24rem;
      background-color: #7BB899;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 11.5rem;
      line-height: 15rem;
      letter-spacing: 0.06em;
      cursor: pointer;
    }
    &__cart {
      position: fixed;
      padding: 40rem;
      z-index: 5;
      top: 0;
      right: -600rem;
      width: 600rem;
      height: 100%;
      background-color: #FFF;
      transition: right 0.3s;
      @media screen and (max-width: 680px) {
        width: 100%;
        right: -100%;
        padding: 25px;
      }
      &-active {
        right: 0;
      }
    }
    &__background {
      position: fixed;
      z-index: 4;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      &-inactive {
        display: none;
      }
    }
    &__cross-container {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      padding: 14rem;
      transition: background-color .3s;
      cursor: pointer;
      &:hover {
        background-color: #7BB899;
      }
    }
    &__cross {
      cursor: pointer;
      position: relative;
      width: 20rem;
      height: 20rem;
      content: '';
      &:after {
        position: absolute;
        top: 50%;
        width: 20rem;
        height: 1px;
        content: '';
        background-color: #1F2020;
        transform: rotate(45deg);
      }
      &:before {
        position: absolute;
        top: 50%;
        width: 20rem;
        height: 1px;
        content: '';
        background-color: #1F2020;
        transform: rotate(-45deg);
      }
      &-modified {
        @media screen and (max-width: 680px) {
          margin: 30px 0 0 0;
        }
      }
    }
    &__title {
      margin: 0;
      font-weight: 500;
      font-size: 30rem;
      letter-spacing: -0.04em;
      color: #1F2020;
    }
    &__cart-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__cart-header {
      display: flex;
      justify-content: space-between;
      margin: 94rem 0 0 0;
      padding: 0 0 10rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    &__cart-counter {
      color: #1F2020;
      font-size: 14rem;
    }
    &__cart-cleaner {
      cursor: pointer;
      text-transform: uppercase;
      font-size: 14rem;
      color: rgba(31, 32, 32, 0.4);
      transition: color .3s;
      &:hover {
        color: #7BB899;
      }
    }
    &__cart-list {
      max-height: 70%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    &__cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 120rem;
      padding: 12rem 0;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)
      }
      @media screen and (max-width: 680px) {
        flex-wrap: wrap;
        height: auto;
      }
    }
    &__cart-image-container {
      position: relative;
      width: 100rem;
      height: 100rem;
      margin: 0 10rem 0 0;
    }
    &__cart-image {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
    &__cart-item-info {
      width: 200rem;
      @media screen and (max-width: 680px) {
        width: calc(100% - 110px);
      }
    }
    &__cart-item-title {
      font-weight: 300;
      font-size: 16rem;
      line-height: 18rem;
      letter-spacing: 0.02em;
      margin: 0 0 15rem 0;
    }
    &__cart-item-price {
      font-weight: 600;
      font-size: 16rem;
    }
    &__cart-amount {
      font-size: 16rem;
    }
    &__cart-amount-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 130rem;
      @media screen and (max-width: 680px) {
        margin: 30px 0 0 0;
      }
    }
    &__cart-amount-minus {
      position: relative;
      width: 40rem;
      height: 24rem;
      background-color: #F2F2F2;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color .3s;
      &::after {
        position: absolute;
        width: 10rem;
        height: 2rem;
        background-color: #000;
        content: '';
        top: calc(50% - 1rem);
        left: calc(50% - 5rem);
      }
      &:hover {
        background-color: #7BB899;;
      }
    }
    &__cart-amount-plus {
      position: relative;
      width: 40rem;
      height: 24rem;
      background-color: #F2F2F2;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color .3s;
      &::after {
        position: absolute;
        width: 10rem;
        height: 2rem;
        background-color: #000;
        content: '';
        top: calc(50% - 0.5rem);
        left: calc(50% - 5rem);
      }
      &::before {
        position: absolute;
        width: 2rem;
        height: 10rem;
        background-color: #000;
        content: '';
        top: calc(((100% - 10rem)/2));
        left: calc((100% - 2rem)/2);
      }
      &:hover {
        background-color: #7BB899;;
      }
    }
    &__final-price-container {
      width: calc(100% - 80rem);
      position: absolute;
      bottom: 40rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 680px) {
        width: calc(100% - 50px);
        bottom: 25px;
      }
    }
    &__final-price-box {
      display: flex;
      flex-direction: column;
    }
    &__total-text {
      font-size: 16rem;
      color: #1F2020;
      margin: 0 0 6rem 0;
    }
    &__total-price {
      font-weight: 500;
      font-size: 30rem;
      letter-spacing: -0.02em;
    }
    &__purchase-button {
      text-transform: uppercase;
      color: #000;
      font-weight: 500;
      font-size: 12rem;
      letter-spacing: 0.06em;
      padding: 20rem 58rem;
      background-color: #7BB899;
      border-radius: 4px;
      cursor: pointer;
      @media screen and (max-width: 680px) {
        padding: 20px;
      }
    }
    &__mobile-burger {
      @media screen and (min-width: 681px) {
        display: none;
      }
      cursor: pointer;
      width: 24px;
      height: 24px;
      &-part {
        width: 24px;
        height: 2px;
        content: '';
        background-color: #000;
        &:not(:last-child) {
          margin: 0 0 4px 0;
        }
      }
    }
  }
</style>