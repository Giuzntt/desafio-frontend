import { CustomButton } from "./styles";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export default function Button({children, ...rest}: ButtonProps) {
    return (
        <CustomButton {...rest}>
            {children}
        </CustomButton>
    )
}




