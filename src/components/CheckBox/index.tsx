import { CustomCheckBox } from "./styles";


interface CheckBoxProps  extends React.InputHTMLAttributes<HTMLInputElement>  {
    label: string;
   


} 



export default function CheckBox({ name, label, ...props }: CheckBoxProps) {
    return (
        
        <CustomCheckBox>
            
                <input type="checkbox"  {...props}  />
                <label htmlFor="squaredFour">{label}</label>
            
        </CustomCheckBox>
    );
}