import styled from 'styled-components';
import { selectThemeMode } from '../../features/layout/themeSlice';
import { useAppSelector } from '../../app/hooks';

export const StyledBack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.color.backBackground};
`;
export const StyledBox = styled.div`
	margin: 0 16px;
	border-radius: 6px;
	padding: 24px;
	width: 100%;
	background: ${({ theme }) => {
		const themeMode = useAppSelector(selectThemeMode);
		return theme[themeMode].mainBackground;
	}};
`;
export const StyledHeading = styled.h2`
	${({ theme }) => theme.textHeading.large}
	color:   ${({ theme }) => {
		const themeMode = useAppSelector(selectThemeMode);
		return theme[themeMode].mainColor;
	}};
`;
