import { StyledSelect } from './SelectInput.styled';
import { SelectInputTypes } from '../../types/types';
const SelectInput = ({
	name,
	options,
	defaultValue,
	onChange,
}: SelectInputTypes) => {
	return (
		<StyledSelect
			isSearchable={false}
			classNamePrefix='Select'
			name={name}
			options={options}
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	);
};

export default SelectInput;
