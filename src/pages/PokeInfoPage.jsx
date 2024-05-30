import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const PokeInfoPage = () => {
  const {name} = useParams()
  const [pokemon,getPokemon]=useFetch()
  useEffect(()=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getPokemon(url)
  },[name])
 
  return (
    <article>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </article>
  )
}

export default PokeInfoPage
