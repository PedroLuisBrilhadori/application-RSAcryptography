import { ClipboardDocumentIcon, KeyIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import Button from '../components/Button';
import Header from '../components/Header'

export default function GenerateKeys() {
  const [keyPrivateText, setKeyPrivateText] = useState('Chave privada');
  const [keyPublicText, setKeyPublicText] = useState('Chave pública');

  function handleOnDoubleClickKeyPublic(e: any){    
    navigator.clipboard.writeText(keyPublicText)
  }

  function handleOnDoubleClickKeyPrivate(e: any){    
    navigator.clipboard.writeText(keyPrivateText)
  }

  return (
    <>
      <Header />
    
      <div className='m-10 w-auto h-max flex border-2 border-stone-800 rounded-xl'>
          <p className='w-full h-[150px] bg-white text-black pl-[10px] rounded-xl' onDoubleClick={handleOnDoubleClickKeyPublic}>{keyPublicText}</p>
          <ClipboardDocumentIcon className='w-[30px] h-[30px] ml-[5px] cursor-pointer' onClick={handleOnDoubleClickKeyPublic} />
      </div>

      <div className='m-10 w-auto h-max flex border-2 border-stone-800 rounded-xl'>
          <p className='w-full h-[150px] bg-white text-black pl-[10px] rounded-xl' onDoubleClick={handleOnDoubleClickKeyPrivate}>{keyPrivateText}</p>
          <ClipboardDocumentIcon className='w-[30px] h-[30px] ml-[5px] cursor-pointer' onClick={handleOnDoubleClickKeyPrivate} />
      </div>

      <Button>
        <KeyIcon width={50} height={50} className='mr-[10px]' />
        Gerar
      </Button>
    </>
  )
}