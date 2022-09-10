import {
	STATUS,
	SUBTASK_ADD,
	TASK_ADD,
	TASK_DESCRIPTION,
	TASK_NAME,
	TASK_PLACEHOLDER,
	TASK_SUBTASK,
	TASK_TITLE,
} from '../../data/textEN';
import {
	StyledBoxSection,
	StyledColumnInputBox,
	StyledLabel,
} from '../../theme/MenuBox.styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Formik, Form, FieldArray } from 'formik';
import { TasksData, TaskInputValues } from '../../types';
import { addTask, selectTasksData } from '../../features/tasks/taskActionSlice';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { setIsTaskAddShow } from '../../features/layout/layoutSlice';
import { taskAddSchema } from '../../helpers/validationSchema';
import { v4 as uuid } from 'uuid';
import SelectInput from '../UI/SelectInput';
import Button from '../UI/Button';
import PopUp from '../UI/PopUp';
import Input from '../UI/Input';
import ScrollWrapper from '../UI/ScrollWrapper';
import CrossIcon from '../UI/CrossIcon';

const TaskAdd = () => {
	const dispatch = useAppDispatch();
	const taskColumns = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const taskColumnsData = taskColumns!.map((column) => ({
		value: column.id,
		label: column.name,
	}));
	const initialValues: TaskInputValues = {
		title: '',
		description: '',
		subtasks: [{ title: '', isCompleted: false }],
		status: taskColumnsData[0].value,
	};
	function handleAddTask(values: TaskInputValues) {
		const task: TasksData = {
			id: uuid(),
			title: values.title,
			description: values.description,
			subtasks: values.subtasks.map((task) => ({
				id: uuid(),
				title: task.title,
				isCompleted: task.isCompleted,
			})),
			status: values.status,
		};
		dispatch(addTask({ task: task, currentBoard: currentBoard }));
		dispatch(setIsTaskAddShow());
	}

	return (
		<PopUp
			title={TASK_TITLE}
			layoutDispatch={() => dispatch(setIsTaskAddShow())}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={taskAddSchema}
				onSubmit={(values) => handleAddTask(values)}
			>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel>{TASK_NAME}</StyledLabel>
							<Input
								name='title'
								type='text'
								placeholder='e.g. Take coffee break'
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='description'>
								{TASK_DESCRIPTION}
							</StyledLabel>
							<Input
								name='description'
								placeholder={TASK_PLACEHOLDER}
								as='textarea'
							/>
						</StyledBoxSection>
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
														<Input
															name={`subtasks.${index}.title`}
															placeholder='e.g. In Progress'
														/>
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
											{SUBTASK_ADD}
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='status'>{STATUS}</StyledLabel>
							<SelectInput
								name='status'
								defaultValue={taskColumnsData[0]}
								options={taskColumnsData}
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

export default TaskAdd;
