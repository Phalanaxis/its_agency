import { defineStore } from 'pinia'
export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: '1 Краска Wallquest, Brownsone MS90102',
        price: '6000',
        image: '',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: true
      },
      {
        id: 2,
        name: '2 Краска Wallquest, Brownsone MS90102',
        price: '3000',
        image: '',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: true
      },
      {
        id: 3,
        name: '3 Краска Wallquest, Brownsone MS90102',
        price: '4500',
        image: '',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: true
      },
      {
        id: 4,
        name: '4 Краска Wallquest, Brownsone MS90102',
        price: '8000',
        image: '',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: true
      },
      {
        id: 5,
        name: '5 Краска Wallquest, Brownsone MS90102',
        price: '1200',
        image: '',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: true
      },
      {
        id: 6,
        name: '6 Краска Wallquest, Brownsone MS90102',
        price: '2000',
        image: '',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: true
      },
      {
        id: 7,
        name: '7 Краска Wallquest, Brownsone MS90102',
        price: '3500',
        image: '',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: true
      }
    ],
  }),
  getters: {
    GET_PRODUCTS: (state) => {
      return state.products
    }
  },
  actions: {
  }
})