import { useRef } from "react"
import { setTrainer } from "../store/slices/trainer.slice"
import { useDispatch }from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  
  
  const inputTrainer = useRef()
  
  const dispatch = useDispatch()
  
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }
  
  return (
    <div>
      <h1>pokedex</h1>
      <p>hi trainer, if you want to find your favorite pokemon, please give me your trainer name</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputTrainer} type="text" />
        <button>catch them all</button>
      </form>
    </div>
  )
}

export default HomePage

