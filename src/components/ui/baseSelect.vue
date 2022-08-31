<template>
  <div
    class="BaseSelect"
    @click="switchOpen"
  >
    <div v-if="isOpen" class="background" />
    <div
      :class="{
        'BaseSelect__block': true,
        'BaseSelect__block_active': isOpen
      }"
    >
      <div
        :class="{'BaseSelect__element': true, 'BaseSelect__element-choosen': isSelect === 'highFirst' }"
        @click="switchSelect(1)"
      >
        Сначала дорогие
      </div>
      <div
        :class="{'BaseSelect__element': true, 'BaseSelect__element-choosen': isSelect === 'lowFirst' }"
        @click="switchSelect()"
      >
        Сначала недорогие
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['select'],
  setup (props, { emit }) {
    const isOpen = ref(false)
    const isSelect = ref(false)

    function switchOpen () {
      isOpen.value = !isOpen.value
    }
    function switchSelect (index) {
      if (isOpen.value) {
        if (index) {
          isSelect.value = 'highFirst'
          emit('select', 'highFirst')
        } else {
          isSelect.value = 'lowFirst'
          emit('select', 'lowFirst')
        }
      }
    }
    return {
      isOpen,
      isSelect,
      switchOpen,
      switchSelect
    }
  }
}
</script>

<style lang="scss" scoped>
  .BaseSelect {
    display: inline-block;
    position: relative;
    cursor: pointer;
    &__block {
      position: absolute;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      top: 0;
      left: 0;
      width: 100%;
      height: 15rem;
      &_active {
        z-index: 5;
        height: 100rem;
        background-color: #FFF;
        .BaseSelect__element {
          text-align: left;
          padding: 17rem 0 0 24rem;
          transition: background-color .2s;
          &-choosen {
            order: 0;
          }
          &::after {
            display: none;
          }
          &:hover {
            background-color: #7BB899;
          }
        }
      }
    }
    &__element {
      text-transform: uppercase;
      text-align: right;
      font-weight: 500;
      letter-spacing: 0.06em;
      font-size: 12rem;
      width: 100%;
      height: 50rem;
      display: inline-block;
      padding: 0 15rem 0 0;
      align-items: center;
      position: relative;
      z-index: 4;
      &-choosen {
        order: -1;
      }
      &::after {
        position: absolute;
        right: 0;
        top: 5rem;
        width: 8rem;
        height: 6rem;
        content: '';
        background-image: url('@/assets/svg/Arrow.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
  .background {
    z-index: 4;
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>