import { defineStore } from 'pinia'
export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: '1 Краска Wallquest, Brownsone MS90102',
        price: '6000',
        image: 'image1.png',
        new: false,
        inStock: true,
        contracted: false,
        exclusive: false,
        sale: false
      },
      {
        id: 2,
        name: '2 Краска Wallquest, Brownsone MS90102',
        price: '3000',
        image: 'image2.png',
        new: false,
        inStock: true,
        contracted: false,
        exclusive: true,
        sale: false
      },
      {
        id: 3,
        name: '3 Краска Wallquest, Brownsone MS90102',
        price: '4500',
        image: 'image3.png',
        new: false,
        inStock: false,
        contracted: true,
        exclusive: false,
        sale: false
      },
      {
        id: 4,
        name: '4 Краска Wallquest, Brownsone MS90102',
        price: '8000',
        image: 'image2.png',
        new: true,
        inStock: false,
        contracted: false,
        exclusive: false,
        sale: false
      },
      {
        id: 5,
        name: '5 Краска Wallquest, Brownsone MS90102',
        price: '1200',
        image: 'image2.png',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: false,
        sale: false
      },
      {
        id: 6,
        name: '6 Краска Wallquest, Brownsone MS90102',
        price: '2000',
        image: 'image1.png',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: true,
        sale: false
      },
      {
        id: 7,
        name: '7 Краска Wallquest, Brownsone MS90102',
        price: '3500',
        image: 'image3.png',
        new: true,
        inStock: true,
        contracted: true,
        exclusive: false,
        sale: true
      }
    ],
    cart: []
  }),
  getters: {
    GET_PRODUCTS: (state) => {
      return state.products
    }
  },
  actions: {
  }
})