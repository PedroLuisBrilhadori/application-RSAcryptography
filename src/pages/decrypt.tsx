import { LockOpenIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import Button from '../components/Button';
import Header from '../components/Header'
import ResultText from '../components/ResultText'

export default function Decrypt() {
  const [changeText, setChangeText] = useState('');
  const [changeKeyPrivateText, setChangeKeyPrivateText] = useState('');

  function handleOnChangeText(e: any){    
    setChangeText(e.target.value);
  }

  function handleOnChangeKeyPrivate(e: any){    
    setChangeKeyPrivateText(e.target.value);
  }

  return (
    <>
      <Header />
      <div className='mx-10 mt-10 w-auto h-max'>
        <textarea placeholder='Mensagem criptografada' className='w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto' id='textDecrypt' onChange={handleOnChangeText} value={changeText} />
        <input placeholder='Chave assincrona (privada) criptografada' className='w-full h-[30px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto' onChange={handleOnChangeKeyPrivate} value={changeKeyPrivateText} />
      </div>
    
      <ResultText result='Resultado:' id='textResult' />

      <Button>
        <LockOpenIcon width={50} height={50} className='mr-[10px]' />
        Descriptografar
      </Button>
    </>
  )
}