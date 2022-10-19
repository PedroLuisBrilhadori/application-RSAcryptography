import React from 'react'
import Header from '../components/Header'
import TextField from '../components/TextField'

export default function Encrypt() {
  return (
    <>
      <Header />
      <section>
        <TextField label='Informe seu texto aqui'/>
      </section>
    </>
  )
}