import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PokeInfo = () => {

const { name } = useParams()

const url = `https://pokeapi.co/api/v2/pokemon/${name}`
const [pokemon, getPokemonByName, hasError] = useFetch(url)

useEffect(() => {
 getPokemonByName()
}, [name])

console.log(pokemon)


  return (
    <div>
        {
          hasError?
          <h1>This pokemon is not exisst ❌</h1>
          : <>
              <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="img pokemon" />
              <h4>{pokemon?.name}</h4>
            </>            
        }
    </div>
  )
}

export default PokeInfo