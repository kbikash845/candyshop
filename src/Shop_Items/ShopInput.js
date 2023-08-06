import React, { Fragment, useState } from 'react'
import { Input } from 'antd';
import { Button} from 'antd';
import uuid from 'react-uuid';
import classes  from './ShopInput.module.css'
import ShopItemList from './ShopItemList';




function ShopInput() {

    const [Candyname ,SetCandyname]=useState();
    const [Dicsrpt ,SetDiscrpt]=useState();
    const [price ,Setprice]=useState();
    const [itemlist,SetItemlist]=useState([])

    const CandyNameHandler=(e)=>{
        SetCandyname(e.target.value)
      };

      const DiscriptinHandler=(e)=>{
         SetDiscrpt(e.target.value)
      }
     const priceHandler=(e)=>{
        Setprice(e.target.value)
     }
     const AddItems=(e)=>{
        
   const NewData={
    id:uuid(),
    Candyname:Candyname,
    Dicsrpt:Dicsrpt,
    price:price
   }
   
   SetItemlist((prevData)=>[...prevData,NewData])
   localStorage.setItem("id",JSON.stringify(NewData))
//    console.log(NewData)
  };
  
  
     
    
  return(
    <>
    <div className={classes.mainContainer}>
       <h1 style={{marginLeft:"4rem"}}>Candy Shop:-</h1>
     <form className={classes.inputdiv}>
         <div>
          <Input placeholder="Candy Name.." onChange={CandyNameHandler} value={Candyname}/>
         </div>
         <div>
         <Input placeholder="Discription..."onChange={DiscriptinHandler} value={Dicsrpt}/>
         </div>
         <div>
         <Input placeholder="price..."type='text' onChange={priceHandler} value={price}/>
         </div>
         <div>
          <Button type="primary" onClick={AddItems}>Add Items</Button>
         </div>
         </form>

         
          
  </div>
  <ShopItemList itemlist={itemlist}/>
  </>
  )
}

export default ShopInput