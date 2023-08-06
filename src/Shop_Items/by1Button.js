import React, { useContext } from 'react'
import CartContext from '../Store/Cart-Contex';
import classes from './ShopList.module.css'


function By1Button(props) {
   const cartctx= useContext(CartContext)

    const addItemCardHandler=()=>{
    
        const myobj={
            item:props.itemlist.Candyname,
            price:props.itemlist.price,
            amount:1,
        
        
          }
        cartctx.addItem(myobj);
    
        // console.log(myobj)
        
      }
  return (
//    <button>Buy1</button>
<button className={classes.btn} onClick={addItemCardHandler}>Buy1</button>
  )
}

export default  By1Button