import { StyledRadioBox, StyledSwitch } from './ThemeBox.styled';
import { toogleTheme } from '../../features/layout/themeSlice';
import { useAppDispatch } from '../../app/hooks';
import moon from '../../assets/icon-dark-theme.svg';
import sun from '../../assets/icon-light-theme.svg';

const ThemeBox = () => {
	const dispatch = useAppDispatch();
	return (
		<StyledRadioBox>
			<img src={sun} alt='Light Theme' />
			<StyledSwitch
				type='checkbox'
				id='theme'
				value='JavaScript'
				onChange={() => dispatch(toogleTheme())}
			/>
			<label />
			<img src={moon} alt='Light Theme' />
		</StyledRadioBox>
	);
};
export default ThemeBox;
