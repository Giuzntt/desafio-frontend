import { styled } from "@stitches/react";


export const Globe = styled("div", {
    content: '',
    position: 'fixed',
    width: 1086,
    height: 1086,
//   align center 
    top: '50%',
    left: '50%',
    transform: 'translate(-65%, -50%)',

    zIndex: -1,

    backgroundImage: 'url(/images/globe.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 650px',
    backgroundPosition: 'center',
    
   
});

export const ContainerWrapper = styled('div',{
    minHeight: 'calc(100vh - 6.5rem)',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',


    '.card': {
        margin: '8rem auto',
        width: 820,
        height: 428,
        maxWidth: '600px',
        padding: '1rem',
        background: 'var(bg-cardfeedback)',
        opacity: 0.7,
        backdropFilter: 'blur(100px)',
        mixBlendMode: 'normal',
        border: '1px solid var(--border-card)',
        borderRadius: '8px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',

        '.card-content': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',

            ".sphere":{
                width: '78px',
                height: '78px',
                background: 'var(--bg-sphere)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            'hr':{
                width: 43,
                height: 11,
                background: 'var(--green)',
                border: 'none',
                borderRadius: '50px',

            },
            'h6': {


                lineHeight: '130%',
                fontSize: '35px',
                fontWeight: '700',
                color: 'var(--txt-home)',
            },
            'p': {
                fontSize: '1rem',
                color: 'var(--txt-home)',
            },


        }

    }        






})

