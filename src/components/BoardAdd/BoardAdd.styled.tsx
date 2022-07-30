import styled from 'styled-components';

export const StyledBack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	background: #00000038;
`;
export const StyledBox = styled.div`
	margin: 0 16px;
	padding: 24px;
	width: 100%;
	background: #fff;
	border-radius: 6px;
`;
export const StyledHeading = styled.h2`
	${({ theme }) => {
		return theme.textHeading.large;
	}}
`;
export const StyledInput = styled.input`
	width: 100%;
	padding: 8px 16px;
	border: 1px solid rgba(130, 143, 163, 0.25);
	border-radius: 4px;
	${({ theme }) => {
		return theme.text.large;
	}}
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
