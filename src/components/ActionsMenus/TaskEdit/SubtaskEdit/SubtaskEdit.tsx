import { FieldArray } from 'formik';
import { COLUMN_ADD, TASK_SUBTASK } from 'data/textEN';
import {
	StyledBoxSection,
	StyledColumnInputBox,
	StyledLabel,
} from 'components/ActionsMenus/ActionsMenus.styled';
import { TaskInputValues } from 'types';
import { Button, CrossIcon, Input, ScrollWrapper } from 'components/UI';

const SubtaskEdit = ({ values }: { values: TaskInputValues }) => (
	<StyledBoxSection>
		<StyledLabel htmlFor='subtask'>{TASK_SUBTASK}</StyledLabel>
		<FieldArray
			name='subtasks'
			render={({ push, remove }) => (
				<>
					<ScrollWrapper>
						{values.subtasks.length > 0 &&
							values.subtasks.map((subtasks, index) => (
								<StyledColumnInputBox key={index}>
									<Input name={`subtasks.${index}.title`} />
									<CrossIcon onClick={() => remove(index)} />
								</StyledColumnInputBox>
							))}
					</ScrollWrapper>
					<Button
						type='button'
						variant='secondary'
						width='full'
						onClick={() => push({ title: '' })}
					>
						{COLUMN_ADD}
					</Button>
				</>
			)}
		/>
	</StyledBoxSection>
);

export default SubtaskEdit;
