import React from "react"
import Header from "../components/header"

export default function About () {
    return (
        <div>
            <h1 style={{ maxWidth: '440px' , textAlign: 'center' , margin: '0 auto' , border: '3px solid black'}}>
                This is the about.js file, it became a page just by creating it inside the pages folder in src.
                <Header headerText="This is a header component in the components folder in src" />
                <Header headerText="This is a second header component, being reused" />
            </h1>
        </div>
        )

    }

