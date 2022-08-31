<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs-content">
      <router-link
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumbs-text"
        :to="breadcrumb.url"
      >
        {{ breadcrumb.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    position: relative;
    z-index: 2;
    &-content {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      :before {
        content: "·";
        padding: 0 8rem;
      }
      :first-child:before{
        display: none;
      }
    }
    &-text {
      display: flex;
      position: relative;
      color: rgba(255, 255, 255, 0.3);
      font-size: 12rem;
      line-height: 1.15;
      text-decoration: none;
      white-space: normal;
      letter-spacing: 0.06em;
      transition: color 0.3s;
      @media screen and (max-width: 680px) {
        font-size: 10px;
        color: rgb(0, 0, 0, 0.3);
      }
      &:last-child {
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 1000rem;
      }
      &:hover {
        color: #7BB899;
      }
      @media screen and (max-width: 1200px) {
        font-size: 12rem;
        &:last-child {
          max-width: 500rem;
        }
      }
    }
    &-text:before {
      color: rgba(255, 255, 255, 0.3);
      font-size: 12rem;
      @media screen and (max-width: 680px) {
        font-size: 10px;
        color: rgb(0, 0, 0, 0.3);
      }
    }
  }
</style>