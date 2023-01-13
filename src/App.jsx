import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Detail from './Components/Detail/Detail';
import Category from './Components/Category/Category';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

function App() {
  const [theme, setTheme] = useState(false);
  const theSetter={
    backgroundColor: theme? "white": "#070214",
    color: theme ? "black": "white"
  }

  const changeTheme =()=>{
    setTheme(!theme)
  }

  return(
    <div className="App" style={{backgroundColor: theme? "white": "#03254E"}}>
      <Router>
      <Header/>
        <Routes>
        <Route path="/" element={ <Body /> } />
          <Route path="/detail/:id" element={ <Detail  /> } />
          <Route path="/category/:cat" element={ <Category /> } />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;