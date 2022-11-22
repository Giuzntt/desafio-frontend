import { Box } from "./styles";


interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: string;
    required?: boolean;
    spellCheck?: boolean;
}


export default function TextField({ label, name, type, required, spellCheck }: TextFieldProps) {
    return (
        <>
            <Box>

            <input
                className="input-field"
                name={name}
                type={type}
                id={name}
                spellCheck={spellCheck}
                required = {required}
                /> 

                <span className="placeholder">{label}</span>
            </Box>
        </>
    );
}
