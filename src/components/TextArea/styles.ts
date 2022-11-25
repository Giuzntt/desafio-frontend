import { styled } from "@stitches/react";





export const CustomTextArea = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '100%',

    '.errorMsg': {
        FontSize: '0.75rem',
        FontWeight: '400',
        lineHeight: '130%',
        FontStyle: 'normal',

        flex: 'none',
        alignSelf: 'flex-start',
        color: 'var(--txt-error)',
        fontSize: '0.875rem'
    },

    textarea: {
        width: '100%',
        height: '92px',
        background: 'var(--bg-text-field)',

        border: '1px solid var( --bg-text-field)',
        borderRadius: '8px',
        padding: '1rem',
        color: 'var(--text-placeholder)',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: '400',
        fontStyle: 'normal',
        resize: 'none',
        outline: 'none',
        transition: 'all 0.2s ease-in-out',

        '&:focus': {
            border: '1px solid var(--border-text-field)',
            color: 'var(--txt-home)'
        }
    }
});