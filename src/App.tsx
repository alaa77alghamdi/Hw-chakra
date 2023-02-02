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
function App() {


  return (
 <>
 <ChakraProvider></ChakraProvider>
 <Nav></Nav>
 <Header></Header>
 <Post></Post>

<>

<Jed></Jed>
</>
<Footer></Footer>
 </>
  )
}

export default App
