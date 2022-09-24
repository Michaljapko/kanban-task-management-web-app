import { ThemeVariant } from './themeVariant.type';

export interface layoutSliceState {
  isSidebarShow: boolean;
  isTaskAddShow: boolean;
  isTaskEditShow: boolean;
  isBoardAddShow: boolean;
  isBoardDeleteShow: boolean;
  isTaskDeleteShow: boolean;
  isTaskShow: boolean;
  isDropdownHeaderShow: boolean;
  isDropdownTaskShow: boolean;
  isBoardEditShow: boolean;
  device: 'desktop' | 'mobile';
  theme: ThemeVariant;
}
