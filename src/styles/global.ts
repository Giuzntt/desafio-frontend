import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Poppins',

        // customize scrollbar
        '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--bg-scrollbar)',
            borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'white',

            borderRadius: '8px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'var(--bg-scrollbar)',
            borderRadius: '8px',
        }


        
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
        '--bg-card': '#151515',
        '--green': '#00F2B1',
        '--text-placeholder': '#888888;',
        '--txt-home': '#E7E7E7',
        '--txt-error': '#FA4D56;',
        '--border-card': '#2A2A2A',
        '--border-text-field': '#E7E7E7',
        '--quinary': '#00FFFF',
        '--bg-home': '#1D1D1D',
        '--bg-sphere': '#47E0FF',
        '--bg-cardfeedback': 'rgba(29, 29, 29, 0.7);',
        '--bg-scrollbar': '#01F2B1',

    }
});