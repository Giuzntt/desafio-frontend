import { Box } from "./styles";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export default function Button({children, ...props}: ButtonProps) {
    return (
        <Box>
            <button {...props}>{children}</button>
        </Box>
    );
}




