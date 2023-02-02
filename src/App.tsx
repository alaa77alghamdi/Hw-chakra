import { useState } from 'react'
import Nav from './compo/Nav'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './compo/Header'
import Post from './compo/Post'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jed from './compo/Jed'
import Footer from './compo/Footer'
import About from './compo/About'
import Home from './compo/Home'
function App() {


  return (
 <>

<Nav></Nav>
<Routes>

<Route path="/" element={<Home/>}>
  
</Route>
<Route path="/info" element={<About/>}></Route>
</Routes>
 <ChakraProvider></ChakraProvider>

 </>
  )
}

export default App
