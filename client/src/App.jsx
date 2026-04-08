import React, { useContext } from "react"
import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Cart from "./pages/Cart"
import AppContext from "./context/AppContext"

function App() {

  return (
    <div>
      <Routes> 
        <Route path="/" element = {<Login />} />
        <Route  path="/home" element={<Home />} /> 
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}


export default App
