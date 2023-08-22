export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};


export const updateCart = (state) => {
    // Calculate item price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)); 

    // Calculate Shipping price (If order is more than $1000.00 TTD, shipping is free else $150.00 TTD)
    state.shippingPrice = addDecimals(state.itemsPrice > 1000 ? 0 : 150);

    //Calculate Tax price (15% of the total price)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

    // Calculate Total price
    state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2); 

    localStorage.setItem('cart', JSON.stringify(state)); 

    return state;
}