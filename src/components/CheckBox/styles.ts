import { styled } from "@stitches/react";





export const CustomCheckBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    userSelect: 'none',
    

    'input[type="checkbox"]': {
        /* removing default appearance */
        appearance: 'none',
        /* adding custom appearance */
        backgroundColor: ' rgba(29, 29, 29, 0.5)',
        border: '1px solid #151515',
        borderRadius: '4px',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'var(--green)',
        },
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 2px  #151515',
        },
        '&:checked': {
            backgroundColor: 'var(--green)',
        },
    }

    
    });






