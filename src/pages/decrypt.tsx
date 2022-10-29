import { ClipboardDocumentIcon, LockOpenIcon, KeyIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import Button from '../components/Button';
import Header from '../components/Header'

export default function Decrypt() {
  const [changeText, setChangeText] = useState('');
  const [changeKeyPrivateText, setChangeKeyPrivateText] = useState('');
  const [result, setResult] = useState('Resultado:');

  function handleOnChangeText(e: any){    
    setChangeText(e.target.value);
  }

  function handleOnChangeKeyPrivate(e: any){    
    setChangeKeyPrivateText(e.target.value);
  }

  function handleOnDoubleClick(e: any){    
    navigator.clipboard.writeText(result)
  }

  return (
    <>
      <Header />
      <div className='mx-10 mt-10 w-auto h-max'>
        <textarea placeholder='Mensagem criptografada' className='w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto' id='textDecrypt' onChange={handleOnChangeText} value={changeText} />
        <input placeholder='Chave assincrona (privada) criptografada' className='w-full h-[30px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto' onChange={handleOnChangeKeyPrivate} value={changeKeyPrivateText} />
      </div>
    
      <div className='m-10 w-auto h-max flex border-2 border-stone-800 rounded-xl'>
        <p className='w-full h-[150px] bg-white text-black pl-[10px] rounded-xl' onDoubleClick={handleOnDoubleClick}>{result}</p>
        <ClipboardDocumentIcon className='w-[30px] h-[30px] ml-[5px] cursor-pointer' onClick={handleOnDoubleClick} />
      </div>

      <div className='flex flex-wrap md:flex-row md:flex-nowrap'>
        <Button>
          <LockOpenIcon width={50} height={50} className='mr-[10px]' />
          Descriptografar
        </Button>

        <Button>
          <KeyIcon width={50} height={50} className='mr-[10px]' />
          Preencher chave
        </Button>
      </div>
    </>
  )
}