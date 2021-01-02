import React from "react"
import Header from "../components/header"

export default function About () {
    return (
        <div>
            <h2 style={{ maxWidth: '500px' , textAlign: 'center' , margin: '0 auto' , border: '3px solid black' , padding: '30px'}}>
                This is the about.js h2 with it's black box. it became a page just by creating it inside the pages folder in src.
                <Header headerText="This is a header component in the components folder in src, bringing the green box prop with it" />
                <Header headerText="This is a second header component, being reused" />
            </h2>
        </div>
        )

    }

