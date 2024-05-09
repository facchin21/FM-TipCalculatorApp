import { useState } from 'react'
import {Input} from '../src/componets/Input'
import {Button} from '../src/componets/Button'
import {ButtonCustom} from '../src/componets/ButtonCustom'
import {InputPerson} from '../src/componets/InputPerson'

function App() {

  const titulo = "splitter";
  const [total, setTotal] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [value, setValue] = useState('');

  const calcularPorcentajePorPersona = () => {
    if(totalPerson === 0) return 0;
    let resultadoP = total * porcentaje / totalPerson;
    return resultadoP.toFixed(2);
  };

  const calcularPorcentajeTotal = () => {
    if(totalPerson === 0) return 0;
    let resultado = total * porcentaje;
    return resultado.toFixed(2);
  };
  
  const porcentajePersona = calcularPorcentajePorPersona();
  const porcentajeTotal = calcularPorcentajeTotal();

  const handleCustomInputChange = (newValue) => {
    // Verificar si el valor es numérico antes de actualizar el estado
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };
  const reset = () => {
    setTotal(0);
    setTotalPerson(0);
    setPorcentaje(0);
    setValue('');
  }
  return (
    <div className='bg-light overflow-x-hidden h-screen flex flex-col
    items-center justify-center'>
        <h1 className='text-2xl text-cyanDark
         font-SpaceMono uppercase'>{titulo}</h1>
        <div>
          <div className='bg-white px-8 py-4 rounded-xl w-96'>
            <h3 className='text-detailDark
             text-lg font-semibold'>Bill</h3>
            <Input total={total} setTotal={setTotal}/>
            <h3 className=' text-sm font-semibold
             text-detailDark my-4'>Select Tip %</h3>
            <div className='flex gap-4 flex-wrap items-center justify-center'>
              <Button value="5" porcentaje={porcentaje} setPorcentaje={setPorcentaje}/>
              <Button value="10" porcentaje={porcentaje} setPorcentaje={setPorcentaje}/>
              <Button value="15" porcentaje={porcentaje} setPorcentaje={setPorcentaje}/>
              <Button value="25" porcentaje={porcentaje} setPorcentaje={setPorcentaje}/>
              <Button value="50" porcentaje={porcentaje} setPorcentaje={setPorcentaje}/>
              <ButtonCustom value={value} setValue={handleCustomInputChange} porcentaje={porcentaje} setPorcentaje={setPorcentaje} />
            </div>
            <h3 className=' text-sm font-semibold
             text-detailDark my-4'>Number of People</h3>
            <InputPerson totalPerson={totalPerson}
             setTotalPerson={setTotalPerson}/>

            <div className='flex flex-col items-center justify-center
              bg-primary py-2 mt-6 px-4 rounded-lg'>
                <div className='w-full'>
                <h3 className=' text-white
                text-lg font-semibold mt-4'>Tip Amount</h3>
                <div className='flex w-full justify-between'>
                    <h3 className=' text-detailDark
                      text-sm font-semibold mt-2'>/ person</h3>  
                    <h3 className='text-3xl text-secondary font-semibold'>${porcentajePersona}</h3>
                </div>
              </div>

              <div className='w-full'>
                <h3 className=' text-white
                text-lg font-semibold mt-4'>Total</h3>
                <div className='flex w-full justify-between'>
                    <h3 className=' text-detailDark
                      text-sm font-semibold mt-2'>/ person</h3>  
                    <h3 className='text-3xl text-secondary font-semibold'>${porcentajeTotal}</h3>
                </div>
              </div>
              <button className='bg-secondary w-full rounded-md py-2 my-4 font-semibold
              transition-all duration-300 hover:bg-light' onClick={reset}>RESET</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
