import React,{useContext} from 'react'
import "./Detail.css" 
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, total } from '../../features/features'
import { ThemeContext } from '../../Api/Context'
import Swal from 'sweetalert2'


const Detail =()=> {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [item, setItem] = useState([]);
  const {theSetter, theme} = useContext(ThemeContext)

  const getItem= async()=>{
      try{
          const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
          console.log(res.data)
          setItem(res.data)
      }catch(err){
          console.log(err)
      }
  }

  useEffect(()=>{
      getItem()
  }, [])

   
  return (
    <div className="Detail_Main" style={theSetter} >
        <div className="Detail_Wrap">
            <div className='Image'>
                <div className='pic'>
                    <img className="detail-img" src={item.image} alt="detail-image"/>
                </div>
            </div>
              <div className='Text'>
                <h2>{item.title}</h2>
              <p className="detail-desc"> <b> <span>Description:</span></b> {item.description}</p>
                <h5 className="detail-cat">Category: {item.category}</h5>
              <button className='button' onClick={()=>{
                dispatch(addToCart(item));
                dispatch(total())
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your todo has been added to cart...',
                  showConfirmButton: false,
                  timer: 1000
                })}}
                 >ADD TO CART</button>
              </div>
            </div>
    </div>
  )
}

export default Detail;