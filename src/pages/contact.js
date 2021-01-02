import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact () {
// const Contact() => {
    return (
        <div style={{ color: 'teal' }}>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
        
        </div>
    )

}