import styled from 'styled-components';

export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;
export const StyledTitle = styled.p`
	${({ theme }) => theme.textHeading.large}
	text-transform: uppercase;
`;
export const StyledInput = styled.input`
	width: 100%;
	border: 1px solid rgba(130, 143, 163, 0.25);
	border-radius: 4px;
	${({ theme }) => theme.text.large}
	padding: 8px 16px;
`;
export const StyledTextArea = styled.textarea`
	width: 100%;
	border: 1px solid rgba(130, 143, 163, 0.25);
	border-radius: 4px;
	${({ theme }) => theme.text.large}
	padding: 8px 16px;
`;
export const StyledColumnInputBox = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 12px;
`;
export const StyledLabel = styled.label`
	display: block;
	${({ theme }) => theme.text.medium}
	margin-bottom:8px;
	color: #828fa3;
`;
