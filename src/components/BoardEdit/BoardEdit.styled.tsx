import styled from 'styled-components';

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
