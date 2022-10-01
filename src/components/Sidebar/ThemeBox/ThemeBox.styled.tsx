import { styled } from '../../../theme/theme';
import { css } from 'styled-components';
import { RESOLUTION_THRESHOLD } from 'constants/resolutionTreshold';

const switchDot = css`
  content: '';
  position: relative;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.1s ease-in-out;
`;

export const StyledRadioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.5rem;
  margin: 1rem;
  height: 3rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.backgroundContrast};

  @media (min-width: ${RESOLUTION_THRESHOLD}) {
    margin: 0 2rem;
  }
`;

export const StyledSwitch = styled.input<{
  currentTheme: 'themeLight' | 'themeDark';
}>`
  outline: 0;
  user-select: none;
  display: inline-block;
  position: absolute;
  width: 2.5rem;
  height: 1.25rem;
  margin: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  & + label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 1.25rem;
    border: none;
    border-radius: 0.75rem;
    z-index: 0;
    background-color: ${({ theme }) => theme.themeColor};
    cursor: pointer;
  }

  & + label::after {
    ${switchDot};
    transform: translateX(
      ${({ currentTheme }) => (currentTheme === 'themeLight' ? '-0.625rem' : '0.625rem')}
    );
  }

  &:focus {
    outline: none;
  }

  &:hover + label {
    background-color: ${({ theme }) => theme.buttonPrimaryHover};
  }
`;
