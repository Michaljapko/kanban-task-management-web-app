import { StyledRadioBox, StyledSwitch } from './ThemeBox.styled';
import { ReactComponent as Moon } from 'assets/icon-dark-theme.svg';
import { ReactComponent as Sun } from 'assets/icon-light-theme.svg';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectCurrentTheme, toogleTheme } from 'store/slices/layoutSlice/layoutSlice';

const ThemeBox = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <StyledRadioBox>
      <Sun />
      <StyledSwitch
        type="checkbox"
        currentTheme={currentTheme}
        onChange={() => dispatch(toogleTheme())}
      />
      <label />
      <Moon />
    </StyledRadioBox>
  );
};
export default ThemeBox;
