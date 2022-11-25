import { forwardRef, useEffect, useState } from "react";
import { CustomSelect } from "./styles";


interface SelectProps {
    options: Array<{ 
        value: number;
        label: string;
        disabled?: boolean;
        selected?: boolean;
        defaultValue?: string;
        
    }>;

    errorMessage?: string;
}

const SelectField = forwardRef<HTMLSelectElement, SelectProps>(({ errorMessage, options, ...rest }, ref) => {

 

    return (
        <CustomSelect>
            <select ref={ref} {...rest} defaultValue=''>
                {options.map((option, index) => (
                    <option key={index} value={option.label} defaultValue={option.label} disabled={option.disabled}>
                        {option.value === 0 ? 'Selecione seu país' : option.label}
                    </option>
                ))}
            </select>

            <span className="errorMsg"> { errorMessage}</span>
        </CustomSelect>
    );
})

export default  SelectField ;