import React from 'react';
import Headers from './Component/Layout/Headers';
import ImageSlide from './ImageSlider/ImageSlide';
import ShopInput from './Shop_Items/ShopInput';
import CartProvider from './Store/CartProvider';


function App() {
  return (
    <div>
      <CartProvider>
      <Headers/>
      <ImageSlide/>
      <ShopInput/>
      </CartProvider>
    </div>
  )
}

export default App
