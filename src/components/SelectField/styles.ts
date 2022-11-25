import { styled } from "@stitches/react";

    
    
    
export const CustomSelect = styled('div', {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    width: '100%',

    '.errorMsg': {
        FontSize: '0.75rem',
        FontWeight: '400',
        lineHeight: '130%',
        FontStyle: 'normal',



        flex: 'none',
        alignSelf: 'flex-start',
        color: 'var(--txt-error)',
        fontSize: '0.875rem',


    },

    select: {
        padding: '0.5rem 1rem',
        width: '100%',
        height: '45px',
        fontSize: '16px',
        border: '1px solid var(--border-card)',
        borderRadius: '5px',
        backgroundColor: 'var(--border-card)',
        color: 'var(--txt-home)'

        
    },

}); ;
        

