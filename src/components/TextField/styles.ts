import { styled } from "@stitches/react";



export const Box = styled('div', {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    width: '100%',
    
    flexDirection: 'column',

    '.errorMsg': {
        // align initial div

        FontSize: '0.75rem',
        FontWeight: '400',
        lineHeight: '130%',
        FontStyle: 'normal',



        flex: 'none',
        alignSelf: 'flex-start',
        color: 'var(--txt-error)',
        fontSize: '0.875rem',


    },

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
        transformOrigin: '0% 0%',
        pointerEvents: 'none',
        background: 'none'
    },

    'input[type="date"]': {
        color: 'transparent',

        '&::-webkit-datetime-edit': {
            color: '#FFFFF'
        },
        // remove icon
        '&::-webkit-calendar-picker-indicator': {
            visibility: 'hidden'
        },

        '&:focus::-webkit-datetime-edit': {
            color: 'rgba(255, 255, 255, .46) !important'
        },

        '&:focus, &:valid, &:placeholder-shown': {
            color: 'var(--txt-home)',

            '&::-webkit-calendar-picker-indicator': {
                visibility: 'visible'
            },

            '& + .placeholder': {
                fontSize: '9.6px',
                transform: 'translateY(-0.625rem)',
                color: 'var(--text-placeholder)'
            },

            '&::before': {
                content: ''
            }
        },

        '&::before': {
            content: 'attr(placeholder)',
            appearance: 'none',

            position: 'absolute',
            color: '#999999'
        }
    },

    input: {
        width: '100%',
        height: '2.8125rem',
        border: '.0625rem solid var(--bg-text-field)',

        backgroundColor: 'var(--bg-text-field)',
        borderRadius: '.25rem',
        padding: '.75rem .75rem',
        fontSize: '1rem',
        color: 'var(--txt-home)',
        '&:focus, &:valid': {
            outline: 'none',
            border: '.0625rem solid var(--border-text-field)',

            '& + .placeholder': {
                transform: ' translateY(-0.5rem)',
                fontSize: '9.6px',

                color: 'var(--text-placeholder)'
            }
        }
    }
});









// );

