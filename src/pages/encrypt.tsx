import React, {useState} from 'react'
import Button from '../components/Button';
import Header from '../components/Header'
import {
  ClipboardDocumentIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

export default function Encrypt() {
  const [changeText, setChangeText] = useState('');
  const [changeKeyPublicText, setChangeKeyPublicText] = useState('');
  const [result, setResult] = useState('Resultado:');

  function handleOnDoubleClick(e: any){    
    navigator.clipboard.writeText(result)
  }

  function handleOnChange(e: any){    
    setChangeText(e.target.value);
  }

  function handleOnChangeKeyPublic(e: any){    
    setChangeKeyPublicText(e.target.value);
  }

  return (
    <>
      <Header />
      <div className='m-10 w-auto h-max'>
        <textarea placeholder='Texto' className='w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto' id='textEncrypt' onChange={handleOnChange} value={changeText} />
        <input placeholder='Chave sincrona (pública) criptografada' className='w-full h-[30px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto mr-2' onChange={handleOnChangeKeyPublic} value={changeKeyPublicText} />
      </div>

      <div className='m-10 w-auto h-max flex'>
        <p className='w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px]' onDoubleClick={handleOnDoubleClick}>{result}</p>
        <ClipboardDocumentIcon className='w-[30px] h-[30px] ml-[5px] cursor-pointer' onClick={handleOnDoubleClick} />
      </div>

      <Button>
        <LockClosedIcon width={50} height={50} className='mr-[10px]' />
        Criptografar
      </Button>
    </>
  )
}