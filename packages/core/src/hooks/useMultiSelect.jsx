import { useEffect, useState } from "react";

export const useMultiSelect = (initialOptions, onChange) => {
	const [options, setOptions] = useState(initialOptions);
	const [ratio, setRatio] = useState(null);

	useEffect(() => {
		const countChecked = options.filter((opt) => opt).length;
		setRatio(countChecked / options.length);

		onChange(options, ratio);
	}, [options]);

	const toggleAll = () => setOptions(options.map(() => (!(ratio > 0))));
	const toggle = (index) => {
		if (index >= options.length) {
			return;
		}

		let newOptions = [...options];
		newOptions[index] = !newOptions[index];

		setOptions(newOptions);
	};

	return [options, ratio, toggle, toggleAll];
};