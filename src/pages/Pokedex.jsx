import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'

const Pokedex = () => { //aquí llega luego de que intoducimos un usuario en FormNameUser.jsx


    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0' //end point para traer todos los pokemones
    const [formUrl, setFormUrl] = useState(urlBase)

    const {trainerName} = useSelector(store => store) //disponibilizamos la variable global que guarda el nombre del entrenador

  return (
    
    <div>
        <p><span>Welcome {trainerName}</span></p>
        <FormPoke setFormUrl = {setFormUrl} urlBase = {urlBase} />
        <PokeContainer formUrl = {formUrl}  />
    </div>
  )
}

export default Pokedex