import { styled } from "@stitches/react";



export const BgGlobe = styled('div', {
    width: '1024px',
    height: '1024px',
    marginRight: '6rem',
    content: '',
    position: 'fixed',
    top: "0",

    right: '0',

    background: 'url(/images/globe.svg) no-repeat center',
    backgroundSize: '100% 900px ',
    zIndex: '-1',
});


export const ContainerHome = styled(
    'div',
    {
        position: 'relative',
        minHeight: 'calc(100vh - 20px)',
        padding: '0 40px',
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',

        gap: '16rem',
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

            hr: {
                width: '43px',
                height: '11px',
                background: 'var(--green)',
                borderRadius: '20px',
                border: 'none'
            },
            h2: {
                display: 'inline-block',
                marginLeft: '0px',
                fontSize: '2.5rem',
                lineHeight: '3.5rem',
                color: '#FFFFFF',
                letterSpacing: '0em',
                textAlign: 'start'
            },

            h3: {
                fontSize: '1.125rem',
                fontWeight: '300',
                lineHeight: '1.5rem',
                color: '#FFFFFF',
                letterSpacing: '0em',
                textAlign: 'start'
            },

            '&:before': {
                content: '',
                width: '1024px',
                height: '1024px',
                marginRight: '6rem',

                position: 'fixed',
                top: '0',

                right: '0',

                background: 'url(/images/globe.svg) no-repeat center',
                backgroundSize: '100% 780px ',
                zIndex: '-1'
            }
        },

        // responsive max 1024px

        '@media (max-width:1024px)': {
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            '.box-img': {
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                h2: {
                    fontSize: '2rem',
                    lineHeight: '2.5rem',
                    textAlign: 'center'
                },
                h3: {
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    textAlign: 'center'
                },
                hr: {
                    width: '30px',
                    height: '8px',
                    background: 'var(--green)',
                    borderRadius: '20px',
                    border: 'none'
                }
            }
        },
        // responsive max 768px
        '@media (max-width: 768px) ': {
            flexDirection: 'column-reverse',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            '.box-img': {
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                h2: {
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    textAlign: 'center'
                },
                h3: {
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    textAlign: 'center'
                },
                hr: {
                    width: '30px',
                    height: '8px',
                    background: 'var(--green)',
                    borderRadius: '20px',
                    border: 'none'
                }
            }
        },
        '@media (max-width: 640px) ': {
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            // invert order flex
            flexDirection: 'column-reverse',

            '.box-img': {
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                h2: {
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    textAlign: 'center'
                },
                h3: {
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    textAlign: 'center'
                },
                hr: {
                    width: '30px',
                    height: '8px',
                    background: 'var(--green)',
                    borderRadius: '20px',
                    border: 'none'
                }
            }
        }
    } //fim media
);  




export const Card = styled('div', {
    width: '60%',
    height: '50%',
    maxWidth: '100%',
    margin: '2rem auto',

    backgroundColor: 'rgba(29, 29, 29, 0.5) var(--bg-card)',
    border: '2px solid var(--border-card)',
    backdropFilter: ' blur(100px)',
    borderRadius: '8px',

    '.content-card, form': {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.2rem',
        padding: ' 2.8rem',
        
        h5: {
            color: 'var(--txt-home)',
            textAlign: 'center',
            fontSize: '1.5625rem',
            lineHeight: '130%',
            fontWeight: '700',
            fontStyle: 'normal'
        },
        h6: {
            color: 'var(--txt-home)',
            textAlign: 'center',
            fontStyle: 'normal',
            fontSize: '0.875rem',
            lineHeight: '130%',
            fontWeight: '300'
        },

        
        '.btn-home': {
            width: '100%',
            height: '50px'
        },
    },

    media: {
        bp3: {
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            margin: '2rem auto',
            backgroundColor: 'rgba(29, 29, 29, 0.5) var(--bg-card)',
            border: '2px solid var(--border-card)',
            backdropFilter: ' blur(100px)',
            borderRadius: '8px',
            '.content-card, form': {
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.2rem',
                padding: ' 2.8rem',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                h5: {
                    color: 'var(--txt-home)',
                    textAlign: 'center',
                    fontSize: '1.5625rem',
                    lineHeight: '130%',
                    fontWeight: '700',
                    fontStyle: 'normal'
                },
                h6: {
                    color: 'var(--txt-home)',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontSize: '0.875rem',
                    lineHeight: '130%',
                    fontWeight: '300'
                }
            }
        },
        bp2: {
            // responsive 768px
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            margin: '2rem auto',
            backgroundColor: 'rgba(29, 29, 29, 0.5) var(--bg-card)',
            border: '2px solid var(--border-card)',
            backdropFilter: ' blur(100px)',
            borderRadius: '8px',
            '.content-card, form': {
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.2rem',
                padding: ' 2.8rem',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                h5: {
                    color: 'var(--txt-home)',
                    textAlign: 'center',
                    fontSize: '1.5625rem',
                    lineHeight: '130%',
                    fontWeight: '700',
                    fontStyle: 'normal'
                },
                h6: {
                    color: 'var(--txt-home)',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontSize: '0.875rem',
                    lineHeight: '130%',
                    fontWeight: '300'
                }
            },
        },




          


            
        
    },
});
                 
            





    





