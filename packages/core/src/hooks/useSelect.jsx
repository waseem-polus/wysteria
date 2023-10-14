import { useEffect, useState } from "react";

export const useSelect = (options, initial, onChange) => {
	const [selected, setSelected] = useState(initial);
	
	useEffect(() => onChange(selected), [selected]);
	
	const resetSelected = () => setSelected(initial);

	return [options, selected, setSelected, resetSelected];
};