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
export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;

export const StyledTitle = styled.p`
	${({ theme }) => {
		return theme.textHeading.large;
	}}
	text-transform: uppercase;
`;
export const StyledInput = styled.input`
	width: 100%;
	border: 1px solid rgba(130, 143, 163, 0.25);
	border-radius: 4px;
	${({ theme }) => {
		return theme.text.large;
	}}
	padding: 8px 16px;
`;

export const StyledTextArea = styled.textarea`
	width: 100%;
	border: 1px solid rgba(130, 143, 163, 0.25);
	border-radius: 4px;
	${({ theme }) => {
		return theme.text.large;
	}}
	padding: 8px 16px;
`;
export const StyledLabel = styled.label`
	display: block;
	${({ theme }) => {
		return theme.text.medium;
	}}
	margin-bottom:8px;
	color: #828fa3;
`;
