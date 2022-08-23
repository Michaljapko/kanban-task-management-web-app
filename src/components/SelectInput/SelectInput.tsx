import Select from 'react-select';
import { StyledSelect } from './SelectInput.styled';

const SelectInput = ({ name, options, defaultValue, onChange }) => {
	return (
		<StyledSelect
			classNamePrefix='Select'
			name={name}
			options={options}
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	);
};

export default SelectInput;
