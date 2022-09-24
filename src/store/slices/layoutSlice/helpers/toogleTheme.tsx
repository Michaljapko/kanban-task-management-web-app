import { ThemeVariant } from '../types/themeVariant.type';

export const toogleThemeReducer = (theme: ThemeVariant) => {
  if (theme === 'themeLight') {
    return 'themeDark';
  }
  return 'themeLight';
};
