import { styled } from '../../theme/theme';

export const StyledText = styled.p`
	${({ theme }) => theme.text.large};
	color: ${({ theme }) => theme.textGrey};
`;
export const StyledWrapper = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
