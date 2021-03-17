import { useEffect, useState } from "react";
import { FieldSelect, FieldGroup } from './styled.js';

export function SelectField({
	id,
	defaultOption,
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
		<FieldGroup className={`field-input-group`} >
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
				{defaultOption && <option value="">{defaultOption}</option>}
				{options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</FieldSelect>
		</FieldGroup>
	);
}