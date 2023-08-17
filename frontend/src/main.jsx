import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import App from './App.jsx'
import './index.css'
import 'flowbite';
import axios from "axios"

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
