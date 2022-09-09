import { StyledRadioBox, StyledSwitch } from './ThemeBox.styled';
import { ReactComponent as Moon } from '../../../assets/icon-dark-theme.svg';
import { ReactComponent as Sun } from '../../../assets/icon-light-theme.svg';
import { toogleTheme } from '../../../features/layout/themeSlice';
import { useAppDispatch } from '../../../app/hooks';

const ThemeBox = () => {
	const dispatch = useAppDispatch();

	return (
		<StyledRadioBox>
			<Sun />
			<StyledSwitch type='checkbox' onChange={() => dispatch(toogleTheme())} />
			<label />
			<Moon />
		</StyledRadioBox>
	);
};
export default ThemeBox;
