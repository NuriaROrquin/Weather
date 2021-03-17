import { useEffect, useState } from "react";
import { FieldSelect, FieldGroup } from './styled.js';

export function SelectField({
	id,
	options,
	onChange,
	value,
	tabIndex,
}) {

	const [optionSelected, setOptionSelected] = useState();

	useEffect(() => {

		if (value)
		{
			setOptionSelected(value);
		}
		
	}, [value])

	const handleOptionSelected = (target) => {

		setOptionSelected(target.value)

	}

	return (
		<FieldGroup >
			<FieldSelect
				value={optionSelected}
				tabIndex={tabIndex}
				name={id}
				id={id}
				onChange={(e) => {
					handleOptionSelected(e.target);

					onChange && onChange(id, e.target.value);
				}}
			>
				{options.map((option, index) => {
					return (
						<option key={index} value={option.value}>
							{option.label}, {option.country}
						</option>
					);
				})}
			</FieldSelect>
		</FieldGroup>
	);
}