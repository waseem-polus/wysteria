import { useEffect, useState } from "react";

export const useMultiSelect = (initialOptions, onChange) => {
	const [options, setOptions] = useState(initialOptions);
	const [ratio, setRatio] = useState(null);

	useEffect(() => {
		const countChecked = options.filter((opt) => opt.checked).length;
		setRatio(countChecked / options.length);

		onChange(options, ratio);
	}, [options]);

	const toggleAll = () => setOptions(options.map((opt) => ({...opt, checked: !(ratio > 0)})));
	const toggle = (i) => {
		if (i >= options.length) {
			return;
		}

		let newOptions = [...options];
		newOptions[i].checked = !newOptions[i].checked;

		setOptions(newOptions);
	};

	return [options, ratio, toggle, toggleAll];
};