import React from 'react'
import './App.css'
import { Navbar, Header, Trending, Download, Resolution, Footer } from './components'
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <Trending />
        <Download />
        <Resolution />
        <Footer />
    </div>
  )
}

export default App
