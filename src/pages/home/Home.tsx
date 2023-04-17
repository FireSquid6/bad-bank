import { useEffect } from "react"
import "./Home.scss"


export default function Home() {
  return (
    <main className="home-page"> 
      <h1 role="title">Welcome to the bad bank!</h1>
      <p role="description">This is an insecure fake banking website</p>
      <img role="image" src="panama-bank-account.jpg"/>
    </main>
  )
}