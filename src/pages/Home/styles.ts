import { styled } from "@stitches/react";



export const BgGlobe = styled('div', {
    width: '1020px',
    height: '1020px',

    content: '',
    position: 'fixed',
    top: "-150px",
    right: '-120px',

    background: 'url(/images/globe.svg) no-repeat center',
    backgroundSize: '100% 800px ',
    zIndex: '-1',
});


export const ContainerHome = styled('div', {
    position: 'relative',
    minHeight: 'calc(100vh - 20px)',
    padding: '0 40px',
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    
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
    },

    // responsive max 1440px
    '@bp1': {
        flexDirection: 'column',
        gap: '2rem',
        padding: '0 20px',
        '.box-img': {
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            'h2': {
                fontSize: '2rem',
                lineHeight: '2.5rem',
                textAlign: 'center'
            },
            'h3': {
                fontSize: '1rem',
                lineHeight: '1.5rem',
                textAlign: 'center'
            }
        }
    }

        

});  




export const Card = styled("div", {
    width: '60%',
    height: '50%',
    maxWidth: '100%',
    maxHeight: '760px',
    margin : '2rem auto',
   
    backgroundColor: "rgba(29, 29, 29, 0.5) var(--bg-card)",
    border: '2px solid var(--border-card)',
    backdropFilter:' blur(100px)',
    borderRadius: "8px",
    
    
    '.content-card':{
        width: '100%',
        height: '100%',
        margin: '0 auto',

        display: "grid",
        gridTemplateRows: "1fr",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
        padding: " 2.8rem",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        'h5': {
            color: 'var(--txt-home)',
            textAlign: 'center',
            fontSize: '1.5625rem',
            lineHeight: '130%',
            fontWeight: '700',
            fontStyle: 'normal'
        },
        'h6': {
            color: 'var(--txt-home)',
            textAlign: 'center',
            fontStyle: 'normal',
            fontSize: '0.875rem',
            lineHeight: '130%',
            fontWeight: '300',
            
        },
        
//         :: -webkit - datetime - edit - year - field: not([aria - valuenow]),
// :: -webkit - datetime - edit - month - field: not([aria - valuenow]),
// :: -webkit - datetime - edit - day - field: not([aria - valuenow]) {
//     color: transparent;
// }

      
        

        '.btn-home': {
            width: '100%',
            height: '50px',
        },

    },
    
    


    variants:{
        sm:{
            true:{
                width: '300px',
                height: '300px',
                padding: '1rem',
                gap: '1rem',
                'h5':{
                    fontSize: '1.125rem',
                    lineHeight: '130%',
                    fontWeight: '700',
                    fontStyle: 'normal'
                },
                'h6':{
                    fontSize: '0.875rem',
                    lineHeight: '130%',
                    fontWeight: '300',
                    fontStyle: 'normal'
                },
                 
            }
        }

    }


    




});




