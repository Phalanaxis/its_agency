<template>
  <the-header :navigations="navigations" />
  <router-view />
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
export default {
  components: {
    TheHeader
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

<style>

</style>