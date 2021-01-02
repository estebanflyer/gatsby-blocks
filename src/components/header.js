import React from 'react'

    export default function Header(props) {
        return (

            <h5 style={{ border: '3px solid green' , maxWidth: '400px' , padding: '30px' }}>
                {props.headerText}
                <p style= {{ border: '3px solid red' }}>
                    <br />||||| This text comes as a props from header.js 
                </p>
            </h5>
        )
    }

