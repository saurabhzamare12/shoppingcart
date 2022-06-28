import React, { useEffect, useState } from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Context'

export default function Cart() {
  const{
    state:{cart},
    dispatch,
  }= CartState();

 const[total,setTotal]= useState();

 useEffect(()=>{
  setTotal(
    cart.reduce((acc,curr)=>acc + Number(curr.price)*curr.qty,0)
  )
 },[cart])
  return (
    <div className='home'>
      <div className='productContainer '>
        <ListGroup>
          {cart.map((prod)=>(
           <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={3} >
                <span>{prod.name}</span>
              </Col>
              <Col md={2}>
                <span>${prod.price}</span>
              </Col>
              <Col md={4}>
                <Image src={prod.image} alt={prod.name} fluid rounded/>
              </Col>
              <Col md={3}>
                <Button
                type='button'
                variant='light'
                onClick={()=>
                dispatch({
                  type:"REMOVE_FROM_CART",
                  payload:prod,
                })
                }
                
                >
                  <AiFillDelete fontSize='20px'/>
                </Button>
              
              
              </Col>
            </Row>
           </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filterssummary'>
        <div className='title'>Subtotal({cart.length}) items</div>
        <span style={{fontWeight:700,fontSize:20}}>Total:${total}</span>
        <Button type='button' disbled={cart.length===0}>Proceed to checkout</Button>

      </div>
    </div>
  )
}
