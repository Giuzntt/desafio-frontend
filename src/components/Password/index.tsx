import { forwardRef, useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Box } from "./styles";

 interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
        label: string;
        errorMessage?: string;

 }








export const Password = forwardRef<HTMLInputElement, PasswordProps>(({ label, errorMessage, ...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(<FaEye />);

    const handleClick = () => {
        setShowPassword(!showPassword);
        if (showPassword) {
            setType("password");
            setIcon(<FaEye />);
        } else { 
            setType("text");
            setIcon(<FaEyeSlash />);
        }
    };

    return (
        <>
            <Box>

                <input {...props} ref={ref} type={type} 
                
                />
                <span className="placeholder">{label}</span>
                <span onClick={handleClick} className='eye-icon'>{icon}</span>
                <span className="errorMsg">{errorMessage}</span>
            </Box>
        </>
    );
});