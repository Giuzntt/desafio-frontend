import { CustomTextArea } from "./styles";


interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}


export function TextArea(props: TextAreaProps) {
    return (

        
        <CustomTextArea {...props}>
            Bio
        </CustomTextArea>
    );

}