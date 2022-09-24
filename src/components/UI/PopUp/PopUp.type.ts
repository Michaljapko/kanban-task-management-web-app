export type PopUpVariants = 'sidebar' | 'delete';

export interface PopUpProps {
  children?: JSX.Element | JSX.Element[] | string;
  title?: string;
  layoutDispatch: () => void;
  variant?: PopUpVariants;
  headingElement?: JSX.Element | JSX.Element[] | string;
}
