import { forwardRef } from "react";
import { CustomSelect } from "./styles";


interface SelectProps {
    options: Array<{ value: string; label: string }>;
}

const SelectField= forwardRef<HTMLSelectElement, SelectProps>(({ options }, ref) => {

    return (
        <CustomSelect>
            <select defaultValue={''}    ref={ref}>
                {options.map((option) =>
                    option.value === '0' ? (
                        <option key={option.value}  value=''  disabled>
                            {option.label}
                        </option>
                    ) : (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    )
                )}
            </select>
        </CustomSelect>
    );
})

export default  SelectField ;