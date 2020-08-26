import React from 'react';

const Cart = (props) => {
    const cart = props.cart // cart ar modde initialize korlam

    let totalIncome = 0
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalIncome = totalIncome + element.income
    }

    return (
        <div>
            <h4>This is user cart: {cart.length}</h4>
            <h4>Total income: ${totalIncome}k</h4>
        </div>
    );
};

export default Cart;