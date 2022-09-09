import styled from 'styled-components';

export const StyledLabel = styled.label`
	${({ theme }) => theme.text.medium}
	display: block;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.textGrey};
`;
export const StyledColumnInputBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 0.7rem;
`;
export const StyledBoxSection = styled.div`
	margin-bottom: 1.5rem;
`;