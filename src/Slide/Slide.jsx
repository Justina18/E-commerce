import React,{useContext} from 'react'
import Slider from 'react-slick';
import './Slide.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeContext } from '../Api/Context';
import { useDispatch } from 'react-redux';


const Slide = () => {
  
  const {theSetter, theme} = useContext(ThemeContext)


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

  return (
    <>
    <div className='slid' style={theSetter}>

    <div className='slider'>
        <h2 className='h2' > Single Item</h2>
        <Slider {...settings}>

          <div className='slider-div'>
            <h4 className='h2' >Get Clothes</h4>
          <img src='/Suit.jpg' className='slider-img'/>
          </div>

          <div className='slider-div'>
          <h4 className='h2' >Get Jewelries</h4>
           <img src='ring.jpg' className='slider-img'/>
          </div>

          <div className='slider-div'>
          <h4 className='h2' >Get Computers</h4>
            <img src='/Laptop.jpg' className='slider-img'/>
          </div>
          
        </Slider>
      </div>

    </div>
    </>
  )
}

export default Slide;