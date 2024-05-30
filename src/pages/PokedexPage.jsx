import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedexPage/PokeCard"
import SelectType from "../components/pokedexPage/SelectType"

const PokedexPage = () => {
  const [searchedName, setSearchedName] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const trainer = useSelector(states => states.trainer)
  const [pokemons, getPokemons, getTypePokemon ]=useFetch()

  useEffect(()=>{
    if(typeSelected === 'allPokemons') {
      //
      const url= 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      getPokemons(url)
    } else {
      //
      getTypePokemon(typeSelected)
    }
  },[typeSelected])

  const inputName = useRef()
  const handleSearch= e =>{
    e.preventDefault()
    setSearchedName(inputName.current.value.trim().toLowerCase())
  }
  const callbackFilter= poke =>{
    const filterName = poke.name.includes(searchedName)
    return filterName
  }
  return (
    <div>
    <h1>pokedex</h1>
    <p>welcome {trainer}, her you will find your favorite pokemon</p>
    <form onSubmit={handleSearch}>
      <input ref={inputName} type="text" />
      <button>search</button>
    </form>
    <SelectType
    setTypeSelected={setTypeSelected}/>
    <div>
      {
        pokemons && pokemons.results.filter(callbackFilter).length === 0
        ? (<h2>😥There are no pokemon that meet the filters</h2>)
          
      
        :(
        pokemons?.results.filter(callbackFilter).map(poke =>(
          <PokeCard 
          key={poke.url}
          poke={poke}
          />
        )
        ))
      }
    </div>
    </div>
  )
}

export default PokedexPage
