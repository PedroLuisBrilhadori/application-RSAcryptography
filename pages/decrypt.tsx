import React from 'react'
import Header from '../components/Header'
import ResultText from '../components/ResultText'
import TextField from '../components/TextField'

export default function Decrypt() {
  return (
    <>
      <Header />
      <section>
        <TextField label='Informe seu texto aqui' id='textDecrypt' />
        
        <ResultText result='' id='textResult' />
      </section>
    </>
  )
}