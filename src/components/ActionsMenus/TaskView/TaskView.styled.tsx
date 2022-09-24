import styled from 'styled-components';

export const StyledDescription = styled.p`
  ${({ theme }) => theme.text.large}
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textGrey};
`;
