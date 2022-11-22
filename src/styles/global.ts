import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Poppins'
    },
    'body':{
        backgroundColor: 'var(--bg-body)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'


    },

    // Definindo palette de cores
    ':root': {
        '--bg-text-field': '#2A2A2A',
        '--bg-body': '#121212',
        '--green': '#00F2B1',
        '--text-placeholder': '#888888;',
        '--border-card': '#2A2A2A',
        '--bg-card': '#151515',
        '--border-text-field': '#E7E7E7',
        '--quinary': '#00FFFF',
        '--bg-home': '#1D1D1D',
        '--txt-home': '#E7E7E7',
    }
});