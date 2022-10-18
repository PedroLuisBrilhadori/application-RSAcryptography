import React from 'react'
import DropdownMenu from '../DropdownMenu'

export const Header = () => {
  return (
    <header>
      <h2>Inicio</h2>
      <h2>Criptografar</h2>
      <h2>Decriptografar</h2>
      <DropdownMenu />
    </header>
  )
}