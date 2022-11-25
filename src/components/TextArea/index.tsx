import { forwardRef } from "react";
import { CustomTextArea } from "./styles";


interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    errorMessage?: string;
}


const  TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({errorMessage,...props}, ref) => {
    return (
      
            <CustomTextArea  >
                <textarea {...props} ref={ref} />
                <span className="errorMsg">{errorMessage}</span>
            </CustomTextArea>
   
    );

})


export default TextArea;