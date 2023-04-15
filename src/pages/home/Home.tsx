import { useEffect } from "react"
import "./Home.scss"


export default function Home() {
  useEffect (() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', password: 'test', email: 'test@gmail.com' })
    };

    fetch('https://localhost:1337/api/accounts', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  })
  
  return (
    <main className="home-page"> 
      <h1 role="title">Welcome to the bad bank!</h1>
      <p role="description">This is an insecure fake banking website</p>
      <img role="image"/>
    </main>
  )
}