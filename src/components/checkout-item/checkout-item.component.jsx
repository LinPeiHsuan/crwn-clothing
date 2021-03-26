import React from 'react';

import './checkout-item.style.scss';

const CheckoutItem  = ({cartItem: {imageUrl, name, quantity, price}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        {/* the remove icon is an UTF-8 Dingbats: https://www.w3schools.com/charsets/ref_utf_dingbats.asp */}
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;