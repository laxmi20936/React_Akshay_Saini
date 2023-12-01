import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { appLayout } from './src/App'
import {RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appLayout} />)

