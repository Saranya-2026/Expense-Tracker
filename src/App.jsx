import React from 'react'
import  './style.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddExpense from './pages/AddExpense'
import About from './pages/About'
import EditExpense from './pages/EditExpense'
import { ToastContainer} from "react-toastify";
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
       <ToastContainer
    position="top-right"
    autoClose={2000}
    theme="colored"
  />
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/add' element={<AddExpense/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path="/edit/:id" element={<EditExpense/>}/>
            </Routes>
           
  <Footer/>
  
    </div>
  )
}

export default App
