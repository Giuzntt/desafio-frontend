import { forwardRef } from "react";
import { CustomTextArea } from "./styles";


interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}


const  TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({...props}, ref) => {
    return (

        
        <CustomTextArea {...props}  ref={ref} />
         
    );

})


export default TextArea;