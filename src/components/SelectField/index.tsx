import { forwardRef, useEffect, useState } from "react";
import { CustomSelect } from "./styles";


interface SelectProps {
    options: Array<{ 
        value: number;
        label: string;
        disabled?: boolean;
        selected?: boolean;
        
    }>;
}

const SelectField= forwardRef<HTMLSelectElement, SelectProps>(({ options, ...rest }, ref) => {

 

    return (
        <CustomSelect>
            <select ref={ref} {...rest} defaultValue=''>
                {options.map((option, index) => (
                    <option key={index} value={option.label} selected={option.selected} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </select>
        </CustomSelect>
    );
})

export default  SelectField ;