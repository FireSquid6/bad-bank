import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import { BrowserRouter, Routes, Route, useLocation, Location } from 'react-router-dom'
import Home from './pages/home/Home'
import CreateAccount from './pages/create-account/CreateAccount'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/deposit" element={<div>Deposit</div>} />
          <Route path="/withdraw" element={<div>Withdraw</div>} />
          <Route path="/alldata" element={<div>All Data</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
