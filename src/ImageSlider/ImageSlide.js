import React ,{useState}from 'react'
import { Carousel } from 'antd';
import mealsImage from '../Assets/pexels-alimurat-üral-14836741.jpg';
import mealimage2 from '../Assets/pexels-elina-fairytale-3811013.jpg';
import mealimage3 from '../Assets/pexels-kader-d-kahraman-7552831.jpg';
import mealimage4 from '../Assets/pexels-meruyert-gonullu-6161503.jpg';
import './ImageSlider.css'


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function ImageSlide() {
    const [dotPosition, setDotPosition] = useState('top');
    const handlePositionChange = ({ target: { value } }) => {
      setDotPosition(value);
    };
  return (
    <div>
        <Carousel autoplay>
    <div>
      <img src={mealsImage}/>
    </div>
    <div>
      <img src={mealimage2}/>
    </div>
    <div>
      <img src={mealimage3}/>
    </div>
    <div>
      <img src={mealimage4}/>
    </div>
  </Carousel>
    </div>
  )
}

export default ImageSlide