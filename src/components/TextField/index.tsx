import { forwardRef, useRef } from "react";
import { Box } from "./styles";


interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}



const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({label, ...props}, ref) => {
  
    return (
        
        <>
            <Box>

            <input {...props} ref={ref} />
            <span className="placeholder">{label}</span>
            </Box>
        </>
    );
});

export default TextField;
