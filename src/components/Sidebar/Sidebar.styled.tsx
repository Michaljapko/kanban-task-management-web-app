import styled from 'styled-components';

export const StyledHead = styled.div`
  margin-bottom: 1.1rem;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.textGrey};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.9rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
`;

export const StyledRadioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem;
  width: 235px;
  height: 48px;
  border-radius: 6px;
  background: ${({ theme }) => theme.backgroundContrast};
`;
export const StyledHideBox = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    margin-top: 22px;
  }
`;
export const StyledWrapper = styled.div`
  max-height: 70vh;
  overflow: auto;
  @media (max-height: 1200px) {
    max-height: 65vh;
  }
  @media (max-height: 930px) {
    max-height: 50vh;
  }
  @media (max-height: 700px) {
    max-height: 40vh;
  }
`;
export const StyledFooter = styled.div`
  @media (min-width: 992px) {
    position: relative;
    bottom: 0;
    width: 100%;
  }
`;
