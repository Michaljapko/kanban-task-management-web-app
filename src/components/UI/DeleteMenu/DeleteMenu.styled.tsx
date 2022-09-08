import { styled } from '../../../theme/theme';

export const StyledText = styled.p`
	${({ theme }) => theme.text.large};
	color: ${({ theme }) => theme.textGrey};
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.5rem;
	gap: 1rem;

	@media (min-width: 992px) {
		flex-direction: row;
		margin-bottom: 1rem;
	}
`;
