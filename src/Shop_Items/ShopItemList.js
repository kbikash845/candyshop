import React, { useContext } from 'react'
import classes from './ShopList.module.css'
import By1Button from './by1Button';
import CartContext from '../Store/Cart-Contex';



function ShopItemList(props) {

    const {itemlist}=props;
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (item) => {
      const myobj={
        item:props.itemlist.Candyname,
        price:props.itemlist.price,
        amount:1,
    
    
      }
    cartCtx.addItem(myobj); // Use the addItem function from the CartContext to add the item
    };
  

  return (
    <ul className={classes.userlist}>
       <h1>Product:=</h1> 
       {itemlist.map((item)=>(
        <li className={classes.li1} key={item.id}>
            <span>{item.Candyname}</span>
            <span>{item.Dicsrpt}</span>
            <span>{item.price}</span>
            <span>
                <button className={classes.btn}  onClick={() => addToCartHandler(item)}>Buy1</button>
                {/* <By1Button itemlist={item}/> */}
                <button className={classes.btn}>Buy2</button>
            </span>
        </li>
    ))}
    </ul>
  )
}

export default ShopItemList