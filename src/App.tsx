import { useEffect, useState } from 'react'
import './App.scss'
import Header from './header/Header'
import { BrowserRouter, Routes, Route, useLocation, Location } from 'react-router-dom'
import Home from './pages/home/Home'
import CreateAccount from './pages/create-account/CreateAccount'
import AllAccounts from './pages/all-accounts/AllAccounts'
import { Deposit, Withdraw } from './pages/management/Management'
import { Account } from './pages/pages';



function App() {
  const [accounts, setAccounts] = useState<Account[]>([])
  useEffect(() => {
    // use localstorage to store accounts
    const accounts = localStorage.getItem("accounts")
    if (accounts) {
      setAccounts(JSON.parse(accounts))
    } else {
      localStorage.setItem("accounts", JSON.stringify([]))
    }

    console.log(accounts)
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount accounts={ accounts } setAccounts={ setAccounts } />} />
          <Route path="/deposit" element={<Deposit accounts={ accounts } setAccounts={ setAccounts }/>} />
          <Route path="/withdraw" element={<Withdraw accounts={ accounts } setAccounts={ setAccounts }/>} />
          <Route path="/alldata" element={<AllAccounts accounts={ accounts } setAccounts={ setAccounts }/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
