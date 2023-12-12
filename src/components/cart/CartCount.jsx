import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItemClear, setCloseCart } from '../../Redux/CartSlice'
const CartCount = ({totalQty}) => {
  const dispatch = useDispatch()

  const onCartClear = ()=> {
    dispatch(setCartItemClear())
  }

  return (
    <>
    <div className=' bg-white h-11 flex items-center justify-between
     px-3 sticky top-0 left-0 right-0 w-full'>
      <div className='flex items-center gap-3 ' >

        <div className='grid items-center cursor-pointer' onClick={()=> dispatch(setCloseCart())}>
            <ChevronDoubleLeftIcon  className=' w-5 h-5
             text-slate-900 hover:text-orange-500 stroke-[2]'/>
        </div>

        <div className=' grid items-center'>
            <h1 className=' text-base font-medium text-slate-900 flex gap-1'
            >Your Cart<span className=' bg-theme-cart rounded px-1 py-0.5
             text-slate-100 font-normal'>({totalQty} items)</span></h1>
        </div>

        </div>
        <div className='flex items-center '>
            <button  type='button' onClick={()=> onCartClear()} className=' rounded bg-theme-cart active:scale-90 p-0.5'>
            <XMarkIcon className=' w-5 h-5 text-white stroke-[2]'/>
            </button>
            
        </div>
    </div>
    </>
  )
}

export default CartCount