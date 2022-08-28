import { useAppSelector } from '../../app/hooks';
import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';
import logoMobile from '../../assets/logo-mobile.svg';
import { selectIsSidebarShow } from '../../features/layout/layoutSlice';
import { selectCurrentTheme } from '../../features/layout/themeSlice';
import { StyledLogo, StyledLogoMobile } from './Logo.styled';

const Logo = () => {
	const currentTheme = useAppSelector(selectCurrentTheme);
	const isSidebarShow = useAppSelector(selectIsSidebarShow);

	const getLogo = () => {
		if (currentTheme === 'themeDark') return logoLight;
		if (currentTheme === 'themeLight') return logoDark;
	};

	return (
		<>
			<StyledLogo isSidebarShow={isSidebarShow}>
				<img src={getLogo()} alt='Kanban Logo' />
			</StyledLogo>

			<StyledLogoMobile>
				<img src={logoMobile} alt='Kanban Logo' />
			</StyledLogoMobile>
		</>
	);
};
export default Logo;
