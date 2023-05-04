import React from 'react'
import FormNameUser from '../components/FormNameUser'

const Home = () => {
  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hi Trainer!</h2>
        <p>Please give us your name to start</p>
        < FormNameUser />
    </div>
  )
}

export default Home