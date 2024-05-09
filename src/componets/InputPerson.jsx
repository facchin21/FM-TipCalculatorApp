import React, { useEffect } from 'react'
import icons from '../../public/images/icon-person.svg'

export const InputPerson = ({ totalPerson, setTotalPerson }) => {
  const getTotal = (e) => {
    setTotalPerson(e.target.value);
  };

  useEffect(() => {
    console.log(totalPerson);
  }, [totalPerson]); 
  return (
    <div className='flex justify-center w-full items-center'>
        <img src={icons} alt="Icono de dolar"  className='-mr-5 z-10'/>
        <input type="number" className='bg-gray py-3 px-4 rounded-lg
        pl-20 text-cyan-800 font-bold appearance-none leading-tight
         focus:outline-none focus:shadow-outline text-right'
         onChange={getTotal}/>
    </div>
  )
}
