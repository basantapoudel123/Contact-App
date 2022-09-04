import React from 'react'
import { Route, Routes  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import AddContact from './pages/add/AddContact';
import EditContact from './pages/edit/EditContact';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
       <Route exact path= "/" element={<Home/>} />
         
       
        <Route path= "/add" element={<AddContact />} />
         
        <Route path= "/edit/:id" element={<EditContact />}  />
         
      </Routes>
    </div>  
  )
}

export default App
