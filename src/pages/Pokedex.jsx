import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import './styles/pokedex.css'
const Pokedex = () => { //aquí llega luego de que intoducimos un usuario en FormNameUser.jsx


    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0' //end point para traer todos los pokemones
    const [formUrl, setFormUrl] = useState(urlBase)

    const {trainerName} = useSelector(store => store) //disponibilizamos la variable global que guarda el nombre del entrenador

  return (
    
    <article className='pokedex'>
        <header className='pokedex__header'>
          <div className="pokedex__text-container"></div>
        </header>
        <article className='pokedex__form-and-pokecontainer'>
            <p><span className='pokedex__welcome'><span>Welcome {trainerName},</span> here you can find your favorite Pokemon</span></p>
            <FormPoke setFormUrl = {setFormUrl} urlBase = {urlBase} />
            <PokeContainer formUrl = {formUrl}  />
        </article>
    </article>
  )
}

export default Pokedex