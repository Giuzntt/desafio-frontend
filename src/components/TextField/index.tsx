import { CustomTextField } from "./styles";


interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: string;
}


export default function TextField({label, name, type}: TextFieldProps) {
    return (
        <>
            <CustomTextField
                type={type}
                id={name}
                placeholder={label}
           
            /> 
        </>
    );
}
