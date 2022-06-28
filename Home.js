import React from 'react'
import { CartState } from '../context/Context';

import SingleProduct from './SingleProduct';
import './styles.css'


export default function Home() {

  const {state:{products}}= CartState();
  console.log(products)
  return (
    <div className='home'>
      
      <div className='productContainer'>
        {products.map((prod)=>{
          return <SingleProduct prod={prod} key={prod.id}/>
        })}
      </div>
    </div>
  )
}
