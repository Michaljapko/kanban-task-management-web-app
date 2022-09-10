import {
	BOARD_COLUMNS,
	COLUMN_ADD,
	COLUMN_PLACEHOLDER,
} from '../../../data/textEN';
import {
	StyledBoxSection,
	StyledColumnInputBox,
	StyledLabel,
} from '../../../theme/MenuBox.styled';
import { ColumnInputValues } from '../../../types/types';
import { FieldArray } from 'formik';
import Button from '../../UI/Button';
import CrossIcon from '../../UI/CrossIcon';
import Input from '../../UI/Input';
import ScrollWrapper from '../../UI/ScrollWrapper';

const ColumnsAdd = ({ values }: { values: ColumnInputValues }) => {
	return (
		<StyledBoxSection>
			<StyledLabel htmlFor='column'>{BOARD_COLUMNS}</StyledLabel>
			<FieldArray
				name='columns'
				render={({ push, remove }) => (
					<>
						<ScrollWrapper>
							{values.columns.length > 0 &&
								values.columns.map((columns, index) => (
									<StyledColumnInputBox key={index}>
										<Input name={`columns.${index}.name`} placeholder={COLUMN_PLACEHOLDER} />
										<CrossIcon onClick={() => remove(index)} />
									</StyledColumnInputBox>
								))}
						</ScrollWrapper>
						<Button
							type='button'
							variant='secondary'
							width='full'
							onClick={() => push({ name: '' })}
						>
							{COLUMN_ADD}
						</Button>
					</>
				)}
			/>
		</StyledBoxSection>
	);
};

export default ColumnsAdd;
