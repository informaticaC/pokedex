import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Prueba from '../components/Pokedex/Prueba'
import Progress_bar from '../components/Progress_bar'
import './styles/pokeInfo.css'


const PokeInfo = () => {

const { name } = useParams()

const url = `https://pokeapi.co/api/v2/pokemon/${name}`
const [pokemon, getPokemonByName, hasError] = useFetch(url)


useEffect(() => {
 getPokemonByName()
}, [name])

console.log(pokemon)
  return (
    <div className='pokeInfo__container'>
        <header className='pokeInfo__header'>
          <div className="pokeInfo__text-container"></div>
        </header>
        {
          hasError?
          <h1>This pokemon is not exist ❌</h1>
          : <>
            
          <div className='pokeInfo' >
            <section className='pokeInfo__card'> {/* Start card section .pokeInfo__Card*/}
              <header className={`pokeInfoCard__header color-${pokemon?.types[0].type.name}`}>
                <img className='pokemon__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="img pokemon" />
              </header>
              <div className="info">
              <h3 className='pokeInfo__card-id'>#{pokemon?.id}</h3>

              <div className="pokeInfo__name">
                <hr />
                <h3 >{pokemon?.name}</h3>
              </div>

              <div className="pokeInfo__peso-altura">
                <p className="pokeInfo__peso"><span className='peso_etiqueta'>Peso</span> <span className='peso_value'>{pokemon?.weight}</span></p>
                <p className="pokeInfo__altura"><span className='altura_etiqueta'>Altura</span> <span className='altura_value'>{pokemon?.height}</span></p>
              </div>

              <div className="types__abilities-container">
                <div className={`types__abilities-title `}>
                  <p>Tipo</p>
                  <p>Habilities</p>
                </div>
                <div className="types__values">
                  <ul>
                  {
                    pokemon?.types.map(type => (
                      <li className={`color-${pokemon?.types[0].type.name}`} key={type.type.url}>{type.type.name}</li>
                    ))
                  }
                  </ul>
                </div>
                <div className="abilities__values">
                  <ul>
                  {
                    pokemon?.abilities.map(ability => (
                      <li key={ability.ability.url}>{ability.ability.name}</li>
                    ))
                  }
                  </ul>
                </div>
                </div>
              </div>   {/* Fin de types__abilities */}

              <article className='pokeInfo__stats'>
                <ul className="pokeInfo__stats-list">
                  {
                    pokemon?.stats.map(stat =>(
                      <>
                        <li key={stat.stat.url} className="pokeInfo__stats-item">
                          {stat.stat.name}
                        </li>
                        <li key={stat.stat.url + stat.stat.name}  className='pokeInfo__stats-value'>
                          <Progress_bar  progress={stat.base_stat} />
                        </li>
                    </>
                    ))
                  }
                </ul>

              </article>
            </section>     {/* end card section .pokeInfo__card*/}
           


            <section className="moves_card pokeInfo__card">
                <hr />
                <h2 className="moves__title">Moves</h2>
                <div className="moves__container"></div>
                    <ul className='moves__list'>
                      {
                        pokemon?.moves.map(move => (
                          <li key={move.move.url} className="moves__list-item">
                            {move.move.name}
                          </li>
                        ))
                      }
                    </ul>
            </section>

          </div>

              <Prueba />
            </>
        }
    </div>
  )
}

export default PokeInfo