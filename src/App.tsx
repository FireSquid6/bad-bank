import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import { BrowserRouter, Routes, Route, useLocation, Location } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/create-account" element={<div>Create Account</div>} />
          <Route path="/deposit" element={<div>Deposit</div>} />
          <Route path="/withdraw" element={<div>Withdraw</div>} />
          <Route path="/alldata" element={<div>All Data</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
