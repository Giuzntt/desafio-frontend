import { styled } from "@stitches/react";



export const ContainerHome = styled("div", {
    maxWidth:'1440px',
    minHeight: '100vh',
    margin: '0 auto',
    padding: '0 60px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",




    

    '.box-img':{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gridTemplateRows: '1fr',
        alignItems: 'center',
        'hr':{
            width: '43px',
            height: '11px',
            background: 'var(--green)',
            borderRadius: '20px',
            border: 'none',
        },
        'h2':{
            fontSize: '2.5rem',
            lineHeight: '3.5rem',
            color: '#FFFFFF',
            letterSpacing: '0em',
            textAlign: 'left',

        },

        'h3':{
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '2.5rem',
            color: '#FFFFFF',
            letterSpacing: '0em',
            textAlign: 'left',
        }  
    },
        '&::before':{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '800px',
            height: '800px',
            backgroundImage: 'url(/images/globe.png)',
            transform: 'translateX( 60%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
        },
    });  


export const Card = styled("div", {

    width: "600px",
    minHeight: "calc(100vh - 15px)",
    backgroundColor: "rgba(29, 29, 29, 0.5) var(--bg-card)",
    border: '2px solid var(--border-card)',
    backdropFilter:' blur(100px)',
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
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




