import { ActionMeta } from 'react-select';

export interface SelectInputProps {
	name?: string;
	options: SelectInputOption[];
	defaultValue?: SelectInputOption;
	classNamePrefix?: string;
	onChange: (
		option: SelectInputOption | null,
		actionMeta: ActionMeta<SelectInputOption>
	) => void;
}
export type SelectInputOption = { value: string; label: string };
