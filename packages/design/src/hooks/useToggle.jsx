import { useEffect, useState } from "react";

const useToggle = (initialValue, onChange = () => {}) => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = () => setValue(!value);
    useEffect(() => onChange(value), [value]);

    return [ value, toggleValue ];
};

export default useToggle;
