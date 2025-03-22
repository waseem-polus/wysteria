import { useState } from "react";

const useOptionallyControlled = (externalVal, defaultVal, onChange) => {
    const isControlled = externalVal !== undefined;

    const [internalVal, setInternalVal] = useState(defaultVal);

    const handleChange = (ext, int) => {
        onChange(ext);
        if (!isControlled) {
            setInternalVal(int ?? ext);
        }
    };

    return [isControlled ? externalVal : internalVal, handleChange];
};

export default useOptionallyControlled;
