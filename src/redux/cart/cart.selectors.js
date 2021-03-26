import {createSelector} from 'reselect';

const selectCart = state => state.cart;

//(array of the input selector, function that returns the value out of the selector)
//it's a memoiselector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
    accumulatedQuantity + cartItem.quantity, 
    0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
    accumulatedQuantity + cartItem.quantity * cartItem.price, 
    0)
);