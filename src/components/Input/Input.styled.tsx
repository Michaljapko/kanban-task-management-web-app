import styled from 'styled-components';
import { selectThemeMode } from '../../features/layout/themeSlice';
import { useAppSelector } from '../../app/hooks';

export const StyledInput = styled.input`
	padding: 8px 16px;
	border: 1px solid rgba(130, 143, 163, 0.25);
	border-color: ${(props: any) => {
		console.log(props.error);
		return typeof props.error === 'string' ? '#ea5555' : 'rgba(130, 143, 163, 0.25)';
	}};
	border-radius: 4px;
	width: 100%;
	background: none;
	${({ theme }) => {
		return theme.text.large;
	}}
	color:   ${({ theme }) => {
		const themeMode = useAppSelector(selectThemeMode);
		return theme[themeMode].mainColor;
	}};
`;
export const StyledWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
`;

export const StyledError = styled.p`
	position: absolute;
	right: 16px;
	display: flex;
	align-items: center;
	font-family: 'Plus Jakarta Sans';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	color: #ea5555;
`;
