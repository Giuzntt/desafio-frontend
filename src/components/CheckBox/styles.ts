import { styled } from "@stitches/react";





export const CustomCheckBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

   'input[type="checkbox"]': {
  /* ...existing styles */
        display: 'grid',
        placeContent: 'center',

       '&::before': {
        content: "",
    width: '0.65em',
  height: '0.65em',
  transform: 'scale(0)',
  transition: '120ms transform ease-in-out',
  boxShadow: 'inset 1em 1em var(--form-control-color)',
    },

    '&:checked::before': {
    transform: 'scale(1)',
    }
    },




    //styleName: Fonts/100/Light,

    '& label': {
        color: 'var(--txt-home)',
      
        fontSize: '0.875rem',
        fontWeight: '300',
        lineHeight: '1.125rem',
        letterSpacing: '0em',
        textAlign: 'center',
    }



})




