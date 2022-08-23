import {
	StyledBoxSection,
	StyledLabel,
	StyledColumnInputBox,
} from './TaskEdit.style';
import {
	selectCurrentTaskData,
	selectTasksData,
	columnChangeTask,
	editTask,
} from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Formik, Form, FieldArray } from 'formik';
import { TasksData, TaskInputValues } from '../../types/types';
import Button from '../Button';
import cross from '../../assets/icon-cross.svg';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { selectCurrentColumn } from '../../features/tasks/columnSlice';
import { setIsTaskEditShow } from '../../features/layout/layoutSlice';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import { taskAddSchema } from '../../helpers/validationSchema';
import Input from '../Input';
import SelectInput from '../SelectInput';

const TaskEdit = () => {
	const dispatch = useAppDispatch();
	const taskColumn = useAppSelector(selectTasksData);
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const task = useAppSelector(selectCurrentTaskData);
	const getColumns = () =>
		taskColumn!.map((column) => ({ id: column.id, name: column.name }));

	const columnsData = getColumns().map((column) => ({
		value: column.id,
		label: column.name,
	}));

	const initialValues: TaskInputValues = {
		title: task.title,
		description: task.description,
		subtasks: task.subtasks,
		status: task.status,
	};

	function handleEditTask(values: TaskInputValues) {
		console.log(values);
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
			title={'Edit Task'}
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
							<StyledLabel htmlFor='title'>Title</StyledLabel>
							<Input
								name='title'
								type='text'
								placeholder='e.g. Take coffee break'
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='description'>Description</StyledLabel>
							<Input
								name='description'
								placeholder='e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.'
								as='textarea'
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='subtask'>Subtask</StyledLabel>
							<FieldArray
								name='subtasks'
								render={({ push, remove }) => (
									<>
										{values.subtasks.length > 0 &&
											values.subtasks.map((subtasks, index) => (
												<StyledColumnInputBox key={index}>
													<Input
														name={`subtasks.${index}.title`}
														placeholder='e.g. In Progress'
													/>
													<img
														src={cross}
														alt='Delete'
														onClick={() => remove(index)}
													/>
												</StyledColumnInputBox>
											))}
										<Button
											type='button'
											variant='secondary'
											onClick={() => push({ title: '' })}
										>
											+ Add New Column
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='status'>Status</StyledLabel>
							<SelectInput
								name='status'
								options={columnsData}
								defaultValue={columnsData[0]}
								onChange={(e) => {
									values.status = e?.value;
								}}
							/>
						</StyledBoxSection>
						<Button type='submit'>Create Task</Button>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};

export default TaskEdit;
