import React,{ useContext} from 'react'
import Cards from '../Cards/Cards'
import { ThemeContext } from '../../Api/Context'
import Slide from '../../Slide/Slide'
import { useDispatch } from 'react-redux'
import Loading from '../Loading/Loading'


const Body = () => {

  const dispatch = useDispatch();
  const {theSetter, theme} = useContext(ThemeContext)
  // console.log(total)

  return (
    <div className='Body-holder'>
    <Slide/>
      <Cards/>
      
  </div>
  )
}

export default Body;