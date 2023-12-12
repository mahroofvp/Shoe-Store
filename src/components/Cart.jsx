import React, { useEffect } from 'react'
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
import {selectCartState, selectedCartItems, selectedTotalAmount, selectedTotalQty, setGetTotals} from '../Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
const dispatch = useDispatch()
const ifCartState = useSelector(selectCartState)
const  cartItems = useSelector(selectedCartItems)
const  totalAmount = useSelector(selectedTotalAmount)
const  totalQty   = useSelector(selectedTotalQty)

useEffect(()=>{
  dispatch(setGetTotals())
},[cartItems, dispatch])


  return ( 
   <>
    <div className={`fixed top-0 left-0 right-0
     bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]
      ${ifCartState ? 'opacity-100 visible translate-x-0 ':' opacity-0 hidden translate-x-8'}`}>

        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <CartCount totalQty={totalQty} />
            {cartItems?.length === 0 ? <CartEmpty/> :
            <div>
              <div className='flex items-start justify-start flex-col gap-y-7 
              lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3'>
                
               { cartItems?.map((item, i)=>(
                 
                 <CartItem key={i} item ={item}/>
               ))
               }
              </div>
              <div className=' fixed bottom-0 bg-white w-full px-5
              py-2 grid items-center'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
                  <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</h1>
                </div>
                <div className='grid items-center gap-2'>
                  <p className='text-sm font-medium text-center '>Taxes and shipping Will Calculate At Shipping</p>
                  <button type='button' className='button-theme bg-theme-cart text-white '>Check Out</button>
                  </div>
              </div>

            </div>} 
            
        </div>
    </div>
   </>
  )
}

export default Cart