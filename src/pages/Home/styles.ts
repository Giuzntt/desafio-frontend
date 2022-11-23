import { styled } from "@stitches/react";



export const BgGlobe = styled('div', {
    width: '100%',
    height: '100%',

    '&::before': {
        width: '100%',
        height: '100%',
        maxWidth:'1440px',
        // transform: 'translateX(10%)',
        content: '',
        position: 'absolute',
        top: '0',
        right: '0',

        background: 'url(/images/globe.svg) no-repeat left',
        backgroundSize: '100% 1000px ',
        zIndex: '-1',

    }
});


export const ContainerHome = styled('div', {
    position: 'relative',
    minHeight: '100vh',
    padding: '0 60px',
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    // espaçamento entre os elementos
    gap: '12rem',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

    '.box-img': {
        position: 'relative',
        height: '100vh',
        width: '600px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '0.8rem',
        // alinhar no começo da div
        alignItems: 'flex-start',
        'hr': {
            width: '43px',
            height: '11px',
            background: 'var(--green)',
            borderRadius: '20px',
            border: 'none'
        },
        'h2': {
            display: 'inline-block',
            marginLeft: '0px',
            fontSize: '2.5rem',
            lineHeight: '3.5rem',
            color: '#FFFFFF',
            letterSpacing: '0em',
            textAlign: 'start'
        },

        'h3': {
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.5rem',
            color: '#FFFFFF',
            letterSpacing: '0em',
            textAlign: 'start'
        }
    }
});  




export const Card = styled("div", {
    width: '600px',
    height: '870px',
    backgroundColor: "rgba(29, 29, 29, 0.5) var(--bg-card)",
    border: '2px solid var(--border-card)',
    backdropFilter:' blur(100px)',
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "2rem",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  
    "@md": {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2rem 4rem",
    },


    'h5':{
        color: 'var(--txt-home)',
        textAlign: 'center',
        fontSize: '1.5625rem',
        lineHeight: '130%',
        fontWeight: '700',
        fontStyle: 'normal'
    },
    'h6':{
        color: 'var(--txt-home)',
        textAlign: 'center',
        fontStyle: 'normal',
        fontSize: '0.875rem',
        lineHeight: '130%',
        fontWeight: '300',
        // 14px/16px: '0.875rem',
    },

    '.btn-home':{
        width: '100%',
        height: '50px',
    }




});




