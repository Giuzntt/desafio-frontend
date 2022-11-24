import { forwardRef } from "react";
import { CustomCheckBox } from "./styles";


interface CheckBoxProps  extends React.InputHTMLAttributes<HTMLInputElement>  {
    label: string;
   


} 


const  CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({label, ...props}, ref) => {
    return (
        <CustomCheckBox>
            <input type="checkbox" {...props} ref={ref} />
            <label htmlFor="squaredFour">{label}</label>
        </CustomCheckBox>
    );
})


export default CheckBox;