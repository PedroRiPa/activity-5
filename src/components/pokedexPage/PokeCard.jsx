import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({poke}) => {
  const[ pokemon,getPokemon] =useFetch()
  useEffect(()=>{
    getPokemon(poke.url)
  },[])
  const  navigate = useNavigate()
  const handleNavdetail = () =>{
    navigate(`/pokemon/${pokemon.name}`)
  }
    return (
    <article onClick={handleNavdetail}>
        <header>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section>
            <h3>{pokemon?.name}</h3>
            <ul>{pokemon?.types.map(typeInfo => (
                <li hey= {typeInfo.type.url}>{typeInfo.type.name}</li>
            ) )}</ul>
            <hr />
            <ul>
                {
                    pokemon?.stats.map(statInfo =>(
                        <li key={statInfo.stat.url}>
                            <span>{statInfo.stat.name}</span>
                            <span>{statInfo.base_stat}</span>
                        </li>
                    ))
                    
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard
