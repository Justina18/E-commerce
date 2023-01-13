import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Loading from '../Loading/Loading'
import { useDispatch } from "react-redux"
import { bringProducts } from '../../Features/Features'
import './Cards.css'
import { ThemeContext } from '../../Api/Context'


const Cards = () => {
    const dispatch = useDispatch();
    const [products, setProducts]= useState([]);
    const [load, setLoad] = useState(false)
    const {theSetter, theme} = useContext(ThemeContext)

    async function getProducts(){
      try{
        setLoad(true)
        const res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
          dispatch(bringProducts(res.data));
      setLoad(false)
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }
  useEffect(()=>{
    getProducts()
  },[])


  return (
    <>
    <div className="Card-Holder" style={theSetter}>
      <div className="Card-Item-Holder">
      {
      // load? Array.from(Array(20).keys())?.map((i , index)=>(
      //     <div key={index} ><Loading theSetter={theSetter}/></div>
      //   )):
         products?.map((i)=>(
          <Link key={i.id} className='shadow' to={`/detail/${i.id}`}>
            <div className='image-card'>
              <img src={i.image} className='wed'/>
            </div>
            <div className='card-text'>
              <p>{i.title}</p>
              <h4>${i.price}</h4>
            </div>
            
          </Link>
        ))
      }
      </div>
    </div>
    </>
  )
}
  
export default Cards;