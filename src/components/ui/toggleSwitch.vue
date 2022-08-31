<template>
  <div class="toggle__container">
    <div class="toggle__switch-box">
      <input
        type="checkbox"
        class="toggle__switch-checkbox"
        v-model="isActive"
        @change="changeEvent()"
      >
      <div :class="{'toggle__switch-knob': true, 'toggle__switch-knob-active': isActive }" />
      <div :class="{'toggle__switch-layer': true, 'toggle__switch-layer-active': isActive }" />
    </div>
    <div class="toggle__text">
      {{ title }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['changeEvent'],
  props: {
    title: {
      type: String,
      default: 'Empty'
    }
  },
  setup (props, { emit }) {
    const isActive = ref(false)

    function changeEvent () {
      emit('changeEvent', isActive.value)
    }
    return {
      isActive,
      changeEvent
    }
  }
}
</script>

<style lang="scss" scoped>
  .toggle {
    &__container {
      display: flex;
      align-items: center;
    }
    &__switch-box {
      position: relative;
      width: 36px;
      height: 22px;
      margin: 0 12px 0 0;
    }
    &__switch-checkbox {
      margin: 0;
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 3;
      opacity: 0;
    }
    &__switch-knob {
      position: absolute;
      top: 7px;
      left: 7px;
      z-index: 2;
      width: 8px;
      height: 8px;
      background-color: #000;
      border-radius: 50%;
      transition: left .2s;
      &-active {
        left: 20px;
        // right: 7px;
      }
    }
    &__switch-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 36px;
      height: 22px;
      background-color: #F2F2F2;
      border-radius: 40px;
      transition: background-color .3s;
      &-active {
        background-color: #7BB899;
      }
    }
    &__text {
      font-size: 12px;
      letter-spacing: 0.06em;
    }
  }
</style>