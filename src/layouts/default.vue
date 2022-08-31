<template>
  <div>
    <the-header :navigations="navigations" />
    <main class="main">
      <router-view />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  setup () {
    const navigations = [
      {
        title: 'Продукты',
        link: '/',
      },
      {
        title: 'Цвета',
        link: '/',
      },
      {
        title: 'Вдохновение',
        link: '/',
      },
      {
        title: 'Советы',
        link: '/',
      },
      {
        title: 'Найти магазин',
        link: '/',
      },
    ]
    return {
      navigations
    }
  }
}
</script>

<style scoped>
  .main {
    min-height: calc(100vh - 344rem);
  }
</style>