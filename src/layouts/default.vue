<template>
  <div>
    <the-header :navigations="navigations" />
    <router-view />
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