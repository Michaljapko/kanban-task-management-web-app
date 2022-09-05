import {
	StyledBoxSection,
	StyledLabel,
	StyledColumnInputBox,
	StyledCrossIcon,
} from './TaskEdit.style';
import {
	selectCurrentTaskData,
	selectTasksData,
	columnChangeTask,
	editTask,
} from '../../features/tasks/taskActionSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Formik, Form, FieldArray } from 'formik';
import { TasksData, TaskInputValues } from '../../types/types';
import Button from '../Button';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { selectCurrentColumn } from '../../features/tasks/columnSlice';
import { setIsTaskEditShow } from '../../features/layout/layoutSlice';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import { taskAddSchema } from '../../helpers/validationSchema';
import Input from '../Input';
import SelectInput from '../SelectInput';
import {
	COLUMN_ADD,
	STATUS,
	TASK_ADD,
	TASK_DESCRIPTION,
	TASK_EDIT,
	TASK_SUBTASK,
	TASK_TITLE,
} from '../../data/textEN';

const TaskEdit = () => {
	const dispatch = useAppDispatch();
	const taskColumns = useAppSelector(selectTasksData);
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const task = useAppSelector(selectCurrentTaskData);

	const getColumns = () =>
		taskColumns!.map((column) => ({ value: column.id, label: column.name }));
	const columnsData = getColumns();

	const initialValues: TaskInputValues = {
		title: task.title,
		description: task.description,
		subtasks: task.subtasks,
		status: task.status,
	};

	function handleEditTask(values: TaskInputValues) {
		const taskEdited: TasksData = {
			id: task.id,
			title: values.title,
			description: values.description,
			subtasks: values.subtasks.map((subtask) => ({
				id: uuid(),
				title: subtask.title,
				isCompleted: subtask.isCompleted,
			})),
			status: values.status,
		};

		dispatch(
			columnChangeTask({
				columnId: currentColumn,
				columnTarget: values.status,
				taskId: taskEdited.id,
				currentBoard: currentBoard,
				task: taskEdited,
			})
		);
		dispatch(
			editTask({
				columnId: currentColumn,
				taskId: taskEdited.id,
				currentBoard: currentBoard,
				task: taskEdited,
			})
		);
		dispatch(setIsTaskEditShow());
	}

	return (
		<PopUp
			title={TASK_EDIT}
			layoutDispatch={() => dispatch(setIsTaskEditShow())}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={taskAddSchema}
				onSubmit={(values) => handleEditTask(values)}
			>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='title'>{TASK_TITLE}</StyledLabel>
							<Input name='title' type='text' />
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='description'>
								{TASK_DESCRIPTION}
							</StyledLabel>
							<Input name='description' as='textarea' />
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='subtask'>{TASK_SUBTASK}</StyledLabel>
							<FieldArray
								name='subtasks'
								render={({ push, remove }) => (
									<>
										{values.subtasks.length > 0 &&
											values.subtasks.map((subtasks, index) => (
												<StyledColumnInputBox key={index}>
													<Input name={`subtasks.${index}.title`} />
													<StyledCrossIcon onClick={() => remove(index)} />
												</StyledColumnInputBox>
											))}
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
						<StyledBoxSection>
							<StyledLabel htmlFor='status'>{STATUS}</StyledLabel>
							<SelectInput
								name='status'
								options={columnsData}
								defaultValue={columnsData[0]}
								onChange={(e) => {
									values.status = e!.value;
								}}
							/>
						</StyledBoxSection>
						<Button width='full' type='submit'>
							{TASK_ADD}
						</Button>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};

export default TaskEdit;
