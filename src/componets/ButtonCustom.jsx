import React, {useEffect} from 'react'

export const ButtonCustom = ({ value, setValue, porcentaje, setPorcentaje }) => {
  
  const getValue = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setValue(""); // Actualiza el valor personalizado como cadena vacía
      setPorcentaje(0); // Establece el porcentaje en cero
    } else {
      const customValue = parseFloat(inputValue);
      setValue(customValue); // Actualiza el valor personalizado
      setPorcentaje(customValue / 100); // Actualiza el porcentaje correspondiente
    }
  }


  return (
    <div className='bg-light py-2 px-8 text-secondary
     rounded-md cursor-pointer w-1/3 flex
     items-center pl-6'>
        <input type="number" placeholder='Custom' 
        className='font-bold text-sm placeholder-secondary  
        transition-all duration-300 bg-transparent
        hover:placeholder-primary
        focus:outline-none focus:shadow-outline
        appearance-none w-full'onChange={getValue}/>
    </div>
  )
}
