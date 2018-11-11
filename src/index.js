import React from 'react'
import ReactDOM from 'react-dom'
import {Heading} from './heading'

import "./assets/css/sample.css"
import "./assets/scss/App.scss"

const wrapper = document.getElementById("app")
wrapper && ReactDOM.render(<Heading text="Hello World!"/>, wrapper)
