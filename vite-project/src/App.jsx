import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currency from "./components/Currency"

const api_key = "fca_live_JU3doapMWqs5zqrAurLAncvt6Jlsk7o8uN41UnyR";

function App() {

  return (
  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
<Currency apikey={api_key}/>    
  </div>
  )
}

export default App
