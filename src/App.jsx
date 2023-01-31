import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import React_modal from './components/React_modal'


function App() {


  return (
    <>
      <Header />
      <Home/>
      <React_modal/>
    </>
  )
}

export default App
