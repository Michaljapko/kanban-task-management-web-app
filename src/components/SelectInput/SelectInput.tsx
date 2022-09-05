import { StyledSelect } from './SelectInput.styled';
import { SelectInputTypes } from '../../types/types';
import Select from 'react-select';

const SelectInput = ({
	name,
	options,
	defaultValue,
	onChange,
}: SelectInputTypes) => {
	return (
		<StyledSelect>
			<Select
				classNamePrefix='Select'
				name={name}
				options={options}
				defaultValue={defaultValue}
				onChange={onChange}
				controlShouldRenderValue={true}
				isSearchable={false}
			/>
		</StyledSelect>
	);
};

export default SelectInput;
