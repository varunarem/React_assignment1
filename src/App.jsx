import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  
  return (
    <>
      <h1>Users</h1>
      <p>Name: <Child Fname='Tony' Lname='Stark'/></p>
      <p>Name: <Child Fname='James' Lname='Mary'/></p>
      <p>Name: <Child Fname='Vikram' Lname='Rathod'/></p>
      
    </>
  )
}

export default App

