import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'



function App() {


  return (
    <>
      <Header />
      <Home/>
  
    </>
  )
}

export default App
