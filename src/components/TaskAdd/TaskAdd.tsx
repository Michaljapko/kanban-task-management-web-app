import { StyledBoxSection, StyledInput, StyledLabel, StyledTextArea } from './TaskAdd.style';
import { addTask, selectTasksData } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useRef, useState } from 'react';

import Button from '../Button';
import { TasksData } from '../../Types/types';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { setIsTaskAddShow } from '../../features/layout/layoutSlice';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';

const TaskAdd = () => {
	const [subtaskInputs, setSubtaskInputs] = useState([{ id: uuid(), value: '' }]);

	const titleInputsRef = useRef<HTMLInputElement>(null);
	const descriptionInputsRef = useRef<HTMLTextAreaElement>(null);
	const columnInputsRef = useRef<HTMLSelectElement>(null);
	const subtaskInputsRef = useRef<HTMLInputElement[]>([]);

	const dispatch = useAppDispatch();
	const taskColumn = useAppSelector(selectTasksData);
	const currentBoard = useAppSelector(selectCurrentBoard);

	function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!titleInputsRef.current) return;
		if (!descriptionInputsRef.current) return;
		if (!columnInputsRef.current) return;

		const subtasks = subtaskInputsRef.current.map((input) => input.value);
		const task: TasksData = {
			id: uuid(),
			title: titleInputsRef.current?.value,
			description: descriptionInputsRef.current?.value,
			subtasks: subtasks.map((task) => {
				return { id: uuid(), title: task, isCompleted: false };
			}),
			status: columnInputsRef.current?.value,
		};
		dispatch(addTask({ task: task, currentBoard: currentBoard }));
		dispatch(setIsTaskAddShow());
	}

	function addToRefs(element: HTMLInputElement) {
		if (element && !subtaskInputsRef.current.includes(element)) {
			subtaskInputsRef.current.push(element);
		}
	}

	return (
		<PopUp title={'Add New Task'} layoutDispatch={() => dispatch(setIsTaskAddShow())}>
			<form onSubmit={(event) => handleAddTask(event)}>
				<StyledBoxSection>
					<StyledLabel htmlFor='title'>Title </StyledLabel>
					<StyledInput ref={titleInputsRef} id='title' type='text' placeholder='e.g. Take coffee break'></StyledInput>
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledLabel htmlFor='description'>Description</StyledLabel>
					<StyledTextArea
						ref={descriptionInputsRef}
						id='description'
						placeholder='e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.'
					/>
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledLabel htmlFor='subtask'>Subtask</StyledLabel>
					{subtaskInputs.map((subtaskInput) => (
						<StyledInput
							ref={addToRefs}
							id={subtaskInput.id}
							type='text'
							defaultValue={subtaskInput.value}
							placeholder='e.g. Make coffee'
						></StyledInput>
					))}
					<Button
						type='button'
						onClick={() => {
							setSubtaskInputs([...subtaskInputs, { id: uuid(), value: '' }]);
						}}
					>
						Add New Subtask
					</Button>
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledLabel htmlFor='status'>Status</StyledLabel>
					<select ref={columnInputsRef} name='status' id='status'>
						{taskColumn?.map((column) => (
							<option value={column.id}>{column.name}</option>
						))}
					</select>
				</StyledBoxSection>
				<Button type='submit'>Create Task</Button>
			</form>
		</PopUp>
	);
};

export default TaskAdd;
