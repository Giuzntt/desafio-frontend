import { styled } from "@stitches/react";





export const CustomCheckBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    userSelect: 'none',

    'input[type="checkbox"]': {
        position: 'relative',
        appearance: 'none',

        backgroundColor: ' rgba(29, 29, 29, 0.5)',
        border: '1px solid #fff',
        borderRadius: '4px',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'var(--green)',
            border: 'none'
        },
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 2px  #151515',
        },
        '&:checked': {
            border: 'none',
            backgroundColor: 'var(--green)'
        }
    },
    "input[type='checkbox']:checked::after": {
        
        content: '"\\2714"',
        fontSize: '1.2em',
        width: '10px',
        height: '10px',

        position: 'absolute',
        // transform check ico1n using css
        // transform: 'rotate(24deg) scale(1.2)',
        // mudar figura de lado
        // mover figura para esquerda
        // reserve content

        transform: ' scale(1.1)',
        color: 'var(--txt-placeholder)',
        border: 'none',

        top: '-2px',
        left: '4px'
        // creating a triangle using border
    },
    label: {
        color: 'var(--txt-home)',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: '400',
        fontStyle: 'normal'
    }
});






