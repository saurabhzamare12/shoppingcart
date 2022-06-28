import React from 'react';
import {Badge, Button, Container, Dropdown, FormControl, Nav, Navbar} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {NavLink,Link} from 'react-router-dom'
import { CartState } from '../context/Context';
import {AiFillDelete} from 'react-icons/ai'


export default function Header() {
const {state:{cart},
dispatch
}=CartState()

  return (
    <Navbar bg='dark' variant='dark' style={{height:100}}>
       <Container>
       
         <Navbar.Brand>
            <Link to='/'>Shopping Cart</Link>
         </Navbar.Brand>
         <Navbar.Text className='search'>
              <FormControl style={{width:500}}
              placeholder='Search a product'
              className='m-auto'       
         />
         </Navbar.Text>

          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant='success'>
                <FaShoppingCart color='white' fontSize='25px'/>
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

               <Dropdown.Menu style={{minwidth:370}}>
                {cart.length>0?(
                  <>
                   {
                    cart.map((prod)=>(
                      <span className='cartitem' key ={prod.id}>
                        <img
                        src={prod.image}
                        className='cartItemImg'
                        alt={prod.name}
                        />
                        <div className='cartItemDetail'>
                          <span>{prod.name}</span>
                          <span>${prod.price.split('.')[0]}</span>
                        </div>
                        <AiFillDelete
                        fontSize='20px'
                        style={{cursor:'pointer'}}
                        onClick={()=>
                        dispatch({
                          type:"REMOVE_FROM_CART",
                          payload:prod
                        })
                        }
                        
                        />
                      </span>

                    ))
                   }
                   <NavLink to='/cart'>
                    <Button style={{width:'95%',margin:'0 10px'}}>
                      Go To Cart
                    </Button>
                   </NavLink>
                  </>
                ):(<span style={{padding:10}}>cart is empty</span>)}
                
               </Dropdown.Menu>
            </Dropdown>
          </Nav>
          </Container> 

    </Navbar>
  )
}
