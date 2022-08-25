import { StyledCheckbox, StyledBox, StyledIcon } from './CheckBox.styled';
import Check from '../../assets/icon-check.svg';
import { CheckBoxTypes } from '../../types/types';

const CheckBox = ({ name, onChange, defaultChecked }: CheckBoxTypes) => {
	return (
		<StyledBox>
			<StyledCheckbox
				type='checkbox'
				name={name}
				onChange={onChange}
				defaultChecked={defaultChecked}
			/>
			<label htmlFor={name}>
				<StyledIcon src={Check} alt='Check' />
			</label>
		</StyledBox>
	);
};

export default CheckBox;
