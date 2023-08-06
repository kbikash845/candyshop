import {Reducer, useReducer} from 'react';
import CartContext from './Cart-Contex';


const defaultCartState={
    items:[],
    totalAmount:0
};
const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
      const updateItem=state.items.concat(action.item);
      const UpdateTotalAmount=state.totalAmount + action.item.price*action.item.amount
      return {
        items:updateItem,
        totalAmount:UpdateTotalAmount
      };
    }
    return defaultCartState;

};

const CartProvider=(props) =>{
    const [cartState,disptchCardAction]=useReducer(cartReducer,defaultCartState)


    const addItemCardHandler=(item)=>{
      console.log(item)
        disptchCardAction({type:"ADD",item:item})
    };
    const removeItemCardHandler=(id)=>{
     disptchCardAction({type:"REMOVE",id:id})
    };

    const cartContext={
        itemarray:cartState.items,
        totalAmount:cartState.totalAmount,

        addItem:addItemCardHandler,
        removeItem:removeItemCardHandler
    };
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;