import { StyledCheckbox, StyledBox, StyledIcon } from './CheckBox.styled';
import Check from '../../assets/icon-check.svg';
const CheckBox = ({ name, onChange, defaultChecked }) => {
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
