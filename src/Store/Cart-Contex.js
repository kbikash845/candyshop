import React from "react";

const CartContext=React.createContext({
    itemarray:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
    })


    export default CartContext;