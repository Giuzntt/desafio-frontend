import { styled } from "@stitches/react";





export const CustomTextField = styled('input', {
    width: '100%',
    height: '40px',
    border: '1px solid var(--bg-text-field)',
    backgroundColor: 'var(--bg-text-field)',
    borderRadius: '4px',
    padding: '0 8px',
    fontSize: '14px',
    color: 'var(--text-placeholder)',
    '&:focus': {
        outline: 'none',
        border: '1px solid var(--border-text-field)'
    },
    '&::placeholder': {
        color: 'var(--text-placeholder)'
    }
});

