import { styled } from "@stitches/react";



export const Box = styled('div',{
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    input: {
        width: '100%',
        height: '2.8125rem',
        border: '1px solid var(--bg-text-field)',
        borderRadius: '.25rem',
        padding: '.75rem .75rem',
        fontSize: '1rem',
        color: 'var(--txt-home)',
        outline: 'none',
        background: 'var(--bg-text-field)',

        '.placeholder': {
            margin: '.625rem 0',
            padding: '0 .625rem',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            top: 0,
            left: '.3125rem',
            fontSize: '16px',
            color: 'var(--text-placeholder)',
            transition: 'all 0.2s',
            background: 'none'
        },

        '&:focus, &:valid ': {
            position: 'relative',
            outline: 'none',
            border: '1px solid var(--border-text-field)',
            background: 'var(--bg-text-field)',
            color: 'var(--txt-home)',
            '& + .placeholder': {
                position: 'absolute',
                top: '-0.5rem',
                left: '1rem',
                
                transform: ' translateY(0.5rem)',

                fontSize: '10px',
                color: 'var(--text-placeholder)'
            }
        }
    },

    '.eye-icon': {
        position: 'absolute',
        right: '1.2rem',
        top: '0.5rem',
        cursor: 'pointer',
        color: 'gray',
        fontSize: '1.5rem',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: 'var(gray-500)'
        }
    },


    '.errorMsg': {
        FontSize: '0.75rem',
        FontWeight: '400',
        lineHeight: '130%',
        FontStyle: 'normal',
        flex: 'none',
        alignSelf: 'flex-start',
        color: 'var(--txt-error)',
        fontSize: '0.875rem',

        }


        
    
});





