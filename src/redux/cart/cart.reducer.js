import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  //based on the action.type, render the specific case
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      //return the new modified state
      return {
        ...state,
        //action (setState)
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state, 
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
          )
      };
    default:
      return state;
  };
};

export default cartReducer;