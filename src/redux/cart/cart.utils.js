//(existing item, the item we want to add)
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //existingCartItem will be TRUE if the added item is already exists in the cartItem, vice versa
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    //if existingCartItem is TRUE
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem);
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};