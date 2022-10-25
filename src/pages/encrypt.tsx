import React, {useState} from 'react'
import Button from '../components/Button';
import Header from '../components/Header'
import ResultText from '../components/ResultText'

export default function Encrypt() {
  const [changeText, setChangeText] = useState('');

  function handleOnChange(e: any){    
    setChangeText(e.target.value);
  }

  return (
    <>
      <Header />
      
      <form action='/api/' method='post'>
        <div className='m-10 w-auto h-max'>
          <textarea placeholder='Texto' className='w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto' id='textEncrypt' onChange={handleOnChange} value={changeText} />
        </div>
      
        <ResultText result='Resultado:' id='textResult' />

        <Button text='Criptografar' />
      </form>
    </>
  )
}