import { styled } from "@stitches/react";



export const Box = styled("div", {
    position: "relative",
    display: "flex",
    margin: "0 auto",
    width: "100%",
    
    '.placeholder':{
        margin: '10px 0',
        padding: '0 10px',
        position: "absolute",
        display:'flex',
        alignItems:'center',
        top: 0,
        left: '5px',
        fontSize: '1rem',
        color: 'var(--text-placeholder)',
        transition: 'all 0.2s',
        transformOrigin: '0% 0%',
        pointerEvents: 'none',
        background: 'none',


    },

   
    'input[type="date"]': {
        color: '#666666',

        '&::before': {
            content: 'attr(placeholder)',
            position: "absolute",
            color: '#999999',
        },

        '&:focus, &valid': {
            color: 'var(--txt-home)',
           

            '& + .placeholder': {
                fontSize: '0.8rem',
                transform: 'translateY(-50px)',
                color: 'var(--txt-home)',
            },

            '&::before': {
                content: ' ',
            },
        }
    },


    

    'input': {

       
        width: '100%',
        height: '45px',
        border: '1px solid var(--bg-text-field)',

        backgroundColor: 'var(--bg-text-field)',
        borderRadius: '4px',
        padding: '10px 12px',
        fontSize: '16px',
        color: 'var(--txt-home)',
        '&:focus, &:valid': {
            outline: 'none',
            border: '1px solid var(--border-text-field)',


            '& + .placeholder': {
                transform: 'scale(0.6) translateY(-22px)',
                fontSize: '15px',
                
                color: 'var(--text-placeholder)',
            },

            


        },


       
       



    
    }

});









// );

