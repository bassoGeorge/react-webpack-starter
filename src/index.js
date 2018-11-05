import React from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => <h1>{text}</h1>

const wrapper = document.getElementById("app")
wrapper && ReactDOM.render(<Heading text="Hello World!"/>, wrapper)
