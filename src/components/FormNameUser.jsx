import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'

const FormNameUser = () => {
    const dispatch = useDispatch()
    const { trainerName } = useSelector(state => state)
    const inputName = useRef()

    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim())) 
        navigate('/pokedex')
    }
    console.log(trainerName)

  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputName} type="text" />
        <button>Start</button>
    </form>
  )
}

export default FormNameUser