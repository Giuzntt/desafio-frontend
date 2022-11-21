import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({

  '*': { 
    margin: 0, 
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins' 
    },

  // Definindo palette de cores
  ':root': {
    '--bg-text-field': '#2A2A2A',
    '--green': '#00F2B1',
    '--text-placeholder': '#888888;',
    '--border-card': '#2A2A2A',
    '--quinary': '#00FFFF',
    '--bg-home':'#1D1D1D'
  }
})