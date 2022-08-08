import styled from 'styled-components';
import { selectThemeMode } from '../../features/layout/themeSlice';
import { useAppSelector } from '../../app/hooks';
import { Field } from 'formik';

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
export const StyledInput = styled(Field)`
	padding: 8px 16px;
	border: 1px solid rgba(130, 143, 163, 0.25);
	border-radius: 4px;
	width: 100%;
	${({ theme }) => {
		return theme.text.large;
	}}
	color:   ${({ theme }) => {
		const themeMode = useAppSelector(selectThemeMode);
		return theme[themeMode].mainColor;
	}};
`;
export const StyledLabel = styled.label`
	display: block;
	margin-bottom: 8px;
	${({ theme }) => {
		return theme.text.medium;
	}}
	color: #828FA3;
`;
export const StyledColumnInputBox = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 12px;
`;
export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;
