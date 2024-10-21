import { useState, useEffect, useCallback } from "react";

const usePointerEvents = (ref) => {
    const [hover, setHover] = useState(false);
    const [focus, setFocus] = useState(false);

    const handleMouseEnter = useCallback(() => setHover(true), []);
    const handleMouseLeave = useCallback(() => setHover(false), []);
    const handleFocus = useCallback(() => setFocus(true), []);
    const handleBlur = useCallback(() => setFocus(false), []);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const element = ref.current;

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("focus", handleFocus);
        element.addEventListener("blur", handleBlur);

        return () => {
            element.removeEventListener("mouseenter", handleMouseEnter);
            element.removeEventListener("mouseleave", handleMouseLeave);
            element.removeEventListener("focus", handleFocus);
            element.removeEventListener("blur", handleBlur);
        };
    }, [ref, handleMouseEnter, handleMouseLeave, handleFocus, handleBlur]);

    return { hover, focus };
};

export default usePointerEvents;
