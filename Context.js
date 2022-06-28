import React, { createContext, useContext, useReducer } from 'react';

import {faker} from '@faker-js/faker'
import { cartReducer } from './Reducers';


const Cart= createContext()


export default function Context({children}) {

const products= [...Array(20)].map(()=>({
  id:faker.datatype.uuid(),
  name:faker.commerce.productName(),
  price:faker.commerce.price(),
  image:faker.image.fashion(),
  fastDelivery: faker.datatype.boolean(),
}))

const [state,dispatch]= useReducer(cartReducer,{
    products:products,
    cart:[]
})

console.log(products)


  return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
}


export const CartState=()=>{
    return useContext(Cart)
}