import { CustomSelect } from "./styles";


interface SelectProps {
    options: Array<{ value: string; label: string }>;
}

export default function SelectField({ options, ...rest }: SelectProps) {
    return (
        <CustomSelect>
            <select {...rest}>
                {options.map((option) => (
                    
                    option.value === '0' ?
                    (<option key={option.value} value={option.value} disabled selected>{option.label}</option>)
                    :
                    (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>

                    )
                
                ))}
            </select>
        </CustomSelect>
    );
}
