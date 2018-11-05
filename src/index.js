import React from 'react'
import ReactDOM from 'react-dom'
import {Heading} from './heading'

const wrapper = document.getElementById("app")
wrapper && ReactDOM.render(<Heading text="Hello World!"/>, wrapper)
