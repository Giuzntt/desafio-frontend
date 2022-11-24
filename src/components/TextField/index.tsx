import { forwardRef, useRef } from "react";
import { Box } from "./styles";


interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    errorMessage?: string;
}



const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ label, errorMessage, ...props}, ref) => {
  
    return (
        
        <>
            <Box>

            <input {...props} ref={ref} />
            <span className="placeholder">{label}</span>

            <span className="errorMsg">{errorMessage}</span>
            </Box>
        </>
    );
});

export default TextField;
