import { StyledBoxSection, StyledLabel } from '../../theme/MenuBox.styled';
import {
	selectCurrentTaskData,
	selectTasksData,
	columnChangeTask,
	editTask,
} from '../../store/slices/taskActionSlice/taskActionSlice';
import {
	STATUS,
	TASK_ADD,
	TASK_DESCRIPTION,
	TASK_EDIT,
	TASK_TITLE,
} from '../../data/textEN';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TasksData, TaskInputValues } from '../../types';
import { Formik, Form } from 'formik';
import { selectCurrentBoard } from '../../store/slices/boardSlice/boardSlice';
import { selectCurrentColumn } from '../../store/slices/columnSlice/columnSlice';
import { setIsTaskEditShow } from '../../store/slices/layoutSlice/layoutSlice';
import { taskAddSchema } from '../../helpers/validationSchema';
import { v4 as uuid } from 'uuid';
import PopUp from '../UI/PopUp';
import Button from '../UI/Button';
import Input from '../UI/Input';
import SelectInput from '../UI/SelectInput';
import SubtaskEdit from './SubtaskEdit';

const TaskEdit = () => {
	const dispatch = useAppDispatch();
	const taskColumns = useAppSelector(selectTasksData);
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const task = useAppSelector(selectCurrentTaskData);

	const taskColumnsData = taskColumns!.map((column) => ({
		value: column.id,
		label: column.name,
	}));
	const currentColumnValue = taskColumnsData.find(
		(column) => column.value === currentColumn
	);

	const initialValues: TaskInputValues = {
		title: task.title,
		description: task.description,
		subtasks: task.subtasks,
		status: currentColumn,
	};

	const handleEditTask = (values: TaskInputValues) => {
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

		const taskStateValues = {
			currentBoard: currentBoard,
			columnId: currentColumn,
			taskId: taskEdited.id,
			task: taskEdited,
		};
		dispatch(columnChangeTask({ columnTarget: values.status, ...taskStateValues }));
		dispatch(editTask(taskStateValues));
		dispatch(setIsTaskEditShow());
	};

	return (
		<PopUp title={TASK_EDIT} layoutDispatch={() => dispatch(setIsTaskEditShow())}>
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
							<StyledLabel htmlFor='description'>{TASK_DESCRIPTION}</StyledLabel>
							<Input name='description' as='textarea' />
						</StyledBoxSection>
						<SubtaskEdit values={values} />
						<StyledBoxSection>
							<StyledLabel htmlFor='status'>{STATUS}</StyledLabel>
							<SelectInput
								options={taskColumnsData}
								defaultValue={currentColumnValue}
								onChange={(event) => {
									values.status = event!.value;
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
