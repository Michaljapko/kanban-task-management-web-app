import { StyledCheckbox, StyledBox, StyledIcon } from './CheckBox.styled';
import { CheckBoxTypes } from '../../../types';

const CheckBox = ({ name, onChange, defaultChecked }: CheckBoxTypes) => {
	return (
		<StyledBox>
			<StyledCheckbox
				type='checkbox'
				name={name}
				checked={defaultChecked}
				readOnly={true}
			/>
			<label htmlFor={name}>
				<StyledIcon />
			</label>
		</StyledBox>
	);
};

export default CheckBox;
