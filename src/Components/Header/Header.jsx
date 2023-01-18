import React,{useState, useEffect, useContext} from 'react'
import './Header.css'
import {RiShoppingCartFill} from "react-icons/ri"
import {FiSun} from "react-icons/fi"
import {FiAlignJustify } from 'react-icons/fi'
import {FaTimes } from 'react-icons/fa'
import { HiMoon } from "react-icons/hi";
import {useNavigate, NavLink} from "react-router-dom"
import Drop from '../Drop/Drop'
import axios from "axios"
import { ThemeContext } from '../../Api/Context'
import { useSelector } from 'react-redux'


const Header = () => {

    const { theme, theSetter, changeTheme}= useContext(ThemeContext);

    const [toggle, settoggle] = useState(true);

    const handletoggle = () => { settoggle(!toggle) }
    const FiAlignJustif = (<FiAlignJustify fontSize={25} color="yellow" onClick={handletoggle} />)
    const FaTime = (<div>
        <FaTimes fontSize={25} color="yellow" onClick={handletoggle} />
                  </div>)

    const navigate = useNavigate()
    const amount= useSelector((state)=> state.commerce.amount)

    const [drop, updateDrop] = useState(false);

    const handleDropH =()=>{
        updateDrop(true)
    }

    const handleDropO =()=>{
        updateDrop(false)
    }
    const [cats, setCats] = useState([]);
    const getCats= async()=>{
        try{
            const res = await axios.get('https://fakestoreapi.com/products/categories');
            setCats(res.data)
        }catch(err){
            console.log(err.message)
        }
    }
    const colorObject ={
        color:theme? "white": "white",
    }
    const activeColorObject ={
        color: "rgb(255, 221, 0)",
        fontWeight: 700
    }

    // function play(){
    //     new Audio(sound).play()
    //   }

    useEffect(()=>{
        getCats()
    },[])
 
 
    return (
        <div className="Header" style={theSetter}>
        <div className="Header-Logo">
            <img src='/Logo.png' alt="Logo-icon" onClick={()=> navigate("/")}/>
        </div>
        <div className="Header-Links">
            <ul>
            <NavLink to="/"  style={({ isActive }) =>
              isActive ? activeColorObject : colorObject}><li className="hvr-bounce-to-right" onMouseOver={handleDropO}>Home</li></NavLink>
                <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} to="/category"><li className="hvr-bounce-to-right" onMouseOver={handleDropH} >Category</li></NavLink>
                <NavLink style={({ isActive }) =>
              isActive ? activeColorObject : colorObject} to="cart"><li className="hvr-bounce-to-right" onMouseOver={handleDropO} ><RiShoppingCartFill/>{"  "}Cart {amount}</li></NavLink>
            </ul>
        </div>
        <div className="Header-Toggle" >
            <div className="toggle-button" onClick={()=> changeTheme()} style={{backgroundColor: theme? "#03254E": "grey"}}>
                {theme? <HiMoon fontSize={30} alt="theme" className="right"/>: <FiSun fontSize={30}  alt="theme" className="left"/>}
            </div>
            <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>
        </div>
        {drop && <Drop cats={cats} handleDrop={handleDropH} remove={handleDropO}/>}
    </div>
  )
}
  

export default Header;