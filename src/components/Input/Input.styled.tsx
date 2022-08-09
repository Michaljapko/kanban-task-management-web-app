import styled from 'styled-components';
import { selectThemeMode } from '../../features/layout/themeSlice';
import { useAppSelector } from '../../app/hooks';
import { Field } from 'formik';

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
