import { SelectInputOption } from './selectInputOption.type';
import { ActionMeta } from 'react-select';

export interface SelectInputTypes {
	name?: string;
	options: SelectInputOption[];
	defaultValue?: SelectInputOption;
	classNamePrefix?: string;
	onChange: (
		option: SelectInputOption | null,
		actionMeta: ActionMeta<SelectInputOption>
	) => void;
}
