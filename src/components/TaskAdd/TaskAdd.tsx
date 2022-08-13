import { StyledBoxSection, StyledColumnInputBox, StyledLabel } from './TaskAdd.style';
import { Formik, Form, FieldArray, Field } from 'formik';
import { addTask, selectTasksData } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../Button';
import { TasksData, TaskInputValues } from '../../Types/types';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { setIsTaskAddShow } from '../../features/layout/layoutSlice';
import cross from '../../assets/icon-cross.svg';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import Input from '../Input';
import { taskAddSchema } from '../../helpers/validationSchema';

const TaskAdd = () => {
	const initialValues: TaskInputValues = { title: '', description: '', subtasks: [{ title: '', isCompleted: false }], status: '' };
	const dispatch = useAppDispatch();
	const taskColumns = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const getColumns = () => {
		if (taskColumns === undefined) return [{ id: 'null', name: 'null' }];
		return taskColumns.map((column) => {
			return { id: column.id, name: column.name };
		});
	};
	const columns = getColumns();

	function handleAddTask(values: TaskInputValues) {
		const task: TasksData = {
			id: uuid(),
			title: values.title,
			description: values.description,
			subtasks: values.subtasks.map((task) => {
				return { id: uuid(), title: task.title, isCompleted: task.isCompleted };
			}),
			status: values.status,
		};
		console.log(task);
		dispatch(addTask({ task: task, currentBoard: currentBoard }));
		dispatch(setIsTaskAddShow());
	}

	return (
		<PopUp title={'Add New Task'} layoutDispatch={() => dispatch(setIsTaskAddShow())}>
			<Formik initialValues={initialValues} validationSchema={taskAddSchema} onSubmit={(values) => handleAddTask(values)}>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='title'>Title </StyledLabel>
							<Input name='title' type='text' placeholder='e.g. Take coffee break' />
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
													<Input name={`subtasks.${index}.title`} placeholder='e.g. In Progress' />
													<img src={cross} alt='Delete' onClick={() => remove(index)} />
												</StyledColumnInputBox>
											))}
										<Button type='button' variant='secondary' onClick={() => push({ title: '' })}>
											+ Add New Column
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='status'>Status</StyledLabel>
							<Field as='select' name='status' defaultValue='none'>
								<option value='none'>Select an Option</option>
								{columns.map((column, index) => (
									<option key={index} value={column.id}>
										{column.name}
									</option>
								))}
							</Field>
						</StyledBoxSection>
						<Button type='submit'>Create Task</Button>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};

export default TaskAdd;
