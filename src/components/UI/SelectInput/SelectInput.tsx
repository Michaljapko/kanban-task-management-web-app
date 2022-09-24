import { StyledSelect } from './SelectInput.styled';
import { SelectInputProps } from './SelectInput.type';
import Select from 'react-select';

const SelectInput = ({ name, options, defaultValue, onChange }: SelectInputProps) => {
  return (
    <StyledSelect>
      <Select
        classNamePrefix="Select"
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
