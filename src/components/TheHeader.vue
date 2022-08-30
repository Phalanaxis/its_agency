<template>
  <header class="header__container">
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
    <div class="header__phone-container">
      <div class="header__phone-number">+7 (495) 221-77-69</div>
      <div class="header__phone-text">Заказать звонок</div>
    </div>
    <div class="header__icons">
      <search />
      <profile />
      <heart />
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/svg/Logo.vue'
import Search from '@/assets/svg/Search.vue'
import Profile from '@/assets/svg/Profile.vue'
import Heart from '@/assets/svg/Heart.vue'
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
  // setup () {
  //   const navigations
  // }
}
</script>

<style lang="scss" scoped>
  .header {
    &__container {
      width: 100%;
      height: 104px;
      display: flex;
      align-items: center;
    }
    &__logo {
      &-link {
        margin: 0 7.5% 0 2.5%;
      }
    }
    &__nav {
      &-link {
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
      }
      &-number {
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.02em;
      }
      &-text {
        font-size: 14px;
        color: rgba(31, 32, 32, 0.3);
      }
    }
  }
</style>