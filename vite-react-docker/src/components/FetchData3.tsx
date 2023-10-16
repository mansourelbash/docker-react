import React,{useContext} from 'react'
import { MyContext } from '../context/MyContextProvider';


const FetchData3 = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div className='flex justify-center items-center gap-5'>
      <h1>{value}</h1>
      <p> My name is mansour</p>
      <button className='bg-red-600 text-black rounded p-2 hover:bg-red-800 hover:text-white' onClick={()=>setValue('Ahmad')}>Change Data</button>
    </div>
  )
}

export default FetchData3