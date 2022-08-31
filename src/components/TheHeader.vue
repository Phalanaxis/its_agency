<template>
  <header class="header__container">
    <div class="header__part-box">
      <router-link class="header__logo-link" to="/">
        <logo class="header__logo" />
      </router-link>
      <nav>
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
    <div class="header__part-box">
      <div class="header__phone-container">
        <div class="header__phone-number">+7 (495) 221-77-69</div>
        <div class="header__phone-text">Заказать звонок</div>
      </div>
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
        <div class="header__cross" @click="openCart()" />
      </div>
      <div class="header__cart-header">
        <div class="header__cart-counter">
          {{ calculateCart() }} товаров
        </div>
        <div class="header__cart-cleaner">
          очистить список
        </div>
      </div>
      <div class="header__cart-list">
        aaa
      </div>
    </div>
    <div :class="{'header__background': true, 'header__background-inactive': !isOpened}" />
  </header>
</template>

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
    return {
      isOpened,
      openCart,
      calculateCart
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    &__container {
      width: 100%;
      height: 104px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2.5%;
    }
    &__part-box {
      display: flex;
      align-items: center;
    }
    &__logo {
      &-link {
        margin: 0 7.5% 0 0;
      }
    }
    &__nav {
      &-link {
        white-space: nowrap;
        text-decoration: none;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #000;
        &:not(:last-child) {
          margin: 0 24px 0 0;
        }
      }
    }
    &__phone {
      &-container {
        display: flex;
        flex-direction: column;
        margin: 0 5% 0 0;
      }
      &-number {
        white-space: nowrap;
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.02em;
      }
      &-text {
        font-size: 14px;
        color: rgba(31, 32, 32, 0.3);
      }
    }
    &__icons {
      display: flex;
      align-items: center;
    }
    &__icon {
      &:not(:last-child) {
        margin: 0 26px 0 0;
      }
    }
    &__cart-badge {
      width: 24px;
      height: 24px;
      background-color: #7BB899;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: 11.5px;
      line-height: 15px;
      letter-spacing: 0.06em;
      cursor: pointer;
    }
    &__cart {
      position: fixed;
      padding: 40px;
      z-index: 5;
      top: 0;
      right: -600px;
      width: 600px;
      height: 100%;
      background-color: #FFF;
      transition: right 0.3s;
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
    &__cross {
      cursor: pointer;
      position: relative;
      width: 48px;
      height: 48px;
      content: '';
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      &:after {
        position: absolute;
        top: 50%;
        left: 25%;
        width: 20px;
        height: 1px;
        content: '';
        background-color: #1F2020;
        transform: rotate(45deg);
      }
      &:before {
        position: absolute;
        top: 50%;
        left: 25%;
        width: 20px;
        height: 1px;
        content: '';
        background-color: #1F2020;
        transform: rotate(-45deg);
      }
    }
    &__title {
      font-weight: 500px;
      font-size: 30px;
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
      margin: 94px 0 0 0;
      padding: 0 0 10px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    &__cart-counter {
      color: #1F2020;
      font-size: 14px;
    }
    &__cart-cleaner {
      text-transform: uppercase;
      font-size: 14px;
      color: rgba(31, 32, 32, 0.4);
    }
  }
</style>