import React from 'react'

export const Button = ({ value, porcentaje, setPorcentaje }) => {
  const handleClick = () => {
    setPorcentaje(parseFloat(value) / 100); // Convertir el valor al porcentaje correspondiente
  }
  console.log(porcentaje)

  return (
    <div className='bg-primary py-2 px-9 text-white
     rounded-md cursor-pointer transition-all
      duration-300 hover:bg-secondary
       hover:text-primary active:bg-secondary ' onClick={handleClick}>
        <h1 className='font-bold'>{value}%</h1>
    </div>
  )
}
