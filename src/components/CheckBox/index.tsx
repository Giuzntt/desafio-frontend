import { forwardRef } from "react";
import { CustomCheckBox } from "./styles";


interface CheckBoxrest  extends React.InputHTMLAttributes<HTMLInputElement>  {
    label: string;
   


} 


const  CheckBox = forwardRef<HTMLInputElement, CheckBoxrest>(({label, ...rest}, ref) => {
    return (
        <CustomCheckBox>
            <input type="checkbox" {...rest} ref={ref} />
            <label htmlFor="squaredFour">{label}</label>
        </CustomCheckBox>
    );
})


export default CheckBox;