import { ActionMeta } from 'react-select';

export interface InputProps {
  name?: string;
  placeholder?: string;
  as?: 'textarea';
  type?: string;
  error?: string;
}

export type SelectInputOption = { value: string; label: string };

export interface SelectInputTypes {
  name?: string;
  options: SelectInputOption[];
  defaultValue?: SelectInputOption;
  classNamePrefix?: string;
  onChange: (option: SelectInputOption | null, actionMeta: ActionMeta<SelectInputOption>) => void;
}
