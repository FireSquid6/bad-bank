import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './header/Header'
import { BrowserRouter, Routes, Route, useLocation, Location } from 'react-router-dom'
import Home from './pages/home/Home'
import CreateAccount from './pages/create-account/CreateAccount'
import AllAccounts from './pages/all-accounts/AllAccounts'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/deposit" element={<div>Deposit</div>} />
          <Route path="/withdraw" element={<div>Withdraw</div>} />
          <Route path="/alldata" element={<AllAccounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
