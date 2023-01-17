import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import About from './pages/about'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </>
  )
}

export default App
