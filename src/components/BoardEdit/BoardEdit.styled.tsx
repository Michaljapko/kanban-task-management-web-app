import styled from 'styled-components';

export const StyledLabel = styled.label`
	${({ theme }) => theme.text.medium}
	display: block;
	margin-bottom: 8px;
	color: ${({ theme }) => theme.textGrey};
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
