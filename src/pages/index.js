import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: 'purple' , fontSize: '50px' }}>
    < Link to="/contact/">Contact</Link>
    <h1>Thank you Gatsby!</h1>
    <p>I understand now.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
}
