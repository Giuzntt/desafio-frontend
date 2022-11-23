import { styled } from "@stitches/react";




// create button using stitches



export const Box = styled('div', {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    width: '100%',

    'button': {
        // reset
        all: 'unset',
        // common styles
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        backgroundColor: 'var(--green)',
        color: 'var(--bg-text-field)',
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: '1',
        // variants
        variants: {
            size: {
                sm: {
                    fontSize: '0.875rem',
                    padding: '0.375rem 0.75rem'
                },
                md: {
                    fontSize: '1rem',
                    padding: '0.5rem 1rem'
                },
                lg: {
                    fontSize: '1.125rem',
                    padding: '0.75rem 1.5rem'
                }
            },
            variant: {
                primary: {
                    backgroundColor: 'var(--green)',
                    color: 'var(--bg-text-field)'
                }
            }
        },

        '&:hover': {
            filter: 'brightness(0.9)'
        }
    }
});

