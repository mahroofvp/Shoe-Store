import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const INITIAL_STATE = {
     cartState : false,
     cartItems: localStorage.getItem("cart") ?
           JSON.parse(localStorage.getItem("cart")) : [],
     cartTotalAmount : 0,
     cartTotalQantity : 0,
};

const CartSlice =  createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        setOpenCart: (state) => {
            state.cartState = true
        },

        setCloseCart: (state) => {
            state.cartState = false
        },
        setAddItemToCart: (state,action) => {

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1

                toast.success(`Item Qty Increased`)
            }
            else {
                const temp = { ...action.payload, cartQuantity:1 }
                state.cartItems.push(temp)
                toast.success(`${action.payload.title} added to Cart`)
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        setRomoveItemFromCart :(state, action) => {
            const removeItem = state.cartItems.filter((item)=> item.id !== action.payload.id)

            state.cartItems = removeItem
            localStorage.setItem("cart", JSON.stringify(state.cartItems))

            toast.success(`${action.payload.title} Removed From Cart`)
        },
        
        setCartItemIncrement : (state, action) => {
            const itemIndex = state.cartItems.findIndex((items)=> items.id === action.payload.id)

            state.cartItems[itemIndex].cartQuantity += 1
            toast.success(`Item Qty Increased`)
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
            
        },
        setCartItemDecrement : (state, action) => {
            const itemIndex = state.cartItems.findIndex((items)=> items.id === action.payload.id)

            if( state.cartItems[itemIndex].cartQuantity > 1 ){

                state.cartItems[itemIndex].cartQuantity -= 1
                toast.success(`Item Qty Decreased`)
                localStorage.setItem("cart", JSON.stringify(state.cartItems))
            } 
            
        },
        setCartItemClear : (state, action) => {
            state.cartItems = []
            toast.success(`Cart Cleared`)
           localStorage.setItem("cart", JSON.stringify(state.cartItems))

        },
        setGetTotals: (state, action) => {
            let { totalAmount, totalQty } = state.cartItems.
            reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem
               const totalPrice = price * cartQuantity
                cartTotal.totalAmount += totalPrice
               cartTotal.totalQty += cartQuantity

               return cartTotal
            }, {
                totalAmount:0,
                totalQty:0,
            })
            state.cartTotalAmount = totalAmount
            state.cartTotalQantity = totalQty
        }
    }
})

export const {
    setOpenCart, 
    setCloseCart, 
    setAddItemToCart, 
    setRomoveItemFromCart, 
    setCartItemIncrement, 
    setCartItemDecrement, 
    setCartItemClear,
    setGetTotals
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState
export const selectedCartItems = (state) => state.cart.cartItems
export const selectedTotalAmount = (state) => state.cart.cartTotalAmount
export const selectedTotalQty = (state) => state.cart.cartTotalQantity
export default CartSlice.reducer;