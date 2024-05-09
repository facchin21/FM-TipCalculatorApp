import React, {useEffect} from 'react'
import icons from '../../public/images/icon-dollar.svg'

export const Input = ({ total, setTotal }) => {
  
  const getTotal = (e) => {
    setTotal(e.target.value)
  }

  useEffect(() => {
    console.log(total);
  }, [total]); // Agrega total como una dependencia.
  
  return (
    <div className='flex justify-center items-center'>
        <img src={icons} alt="Icono de dolar"  className='-mr-5 z-10'/>
        <input type="number" className='bg-gray py-3 px-4 rounded-lg
        pl-20 text-cyan-800 font-bold appearance-none leading-tight
         focus:outline-none focus:shadow-outline text-right' 
         onChange={getTotal}/>
    </div>
  )
}
