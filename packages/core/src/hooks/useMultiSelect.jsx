import { useEffect, useState } from "react";

export const useMultiSelect = (initialOptions, onChange) => {
	const [options, setOptions] = useState(initialOptions);
	const [cumulative, setCumulative] = useState(null);

	useEffect(() => {
		const countChecked = options.filter((opt) => opt).length;
		switch(countChecked) {
		case 0: 
			setCumulative(-1);
			break;
		case options.length:
			setCumulative(1);
			break;
		default:
			setCumulative(0);
		}

		onChange({options, cumulative});
	}, [options]);

	const toggleAll = () => setOptions(options.map(() => (!(cumulative >= 0))));

	const toggle = (index) => {
		if (index >= options.length) {
			return;
		}

		let newOptions = [...options];
		newOptions[index] = !newOptions[index];

		setOptions(newOptions);
	};

	return [{options, cumulative}, toggle, toggleAll];
};