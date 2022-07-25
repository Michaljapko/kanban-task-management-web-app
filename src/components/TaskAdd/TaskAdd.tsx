import Button from '../Button';

import { TasksData } from '../../Types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addTask, selectTasks } from '../../features/tasks/tasksSlice';

import { StyledInput, StyledTextArea } from './TaskAdd.style';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

const TaskAdd = () => {
	const [subtaskInputs, setSubtaskInputs] = useState([{ id: uuid(), value: '' }]);

	const titleInputsRef = useRef<HTMLInputElement>(null);
	const descriptionInputsRef = useRef<HTMLTextAreaElement>(null);
	const columnInputsRef = useRef<HTMLSelectElement>(null);
	const subtaskInputsRef = useRef<HTMLInputElement[]>([]);
	// subtaskInputsRef.current = [];

	const dispatch = useAppDispatch();
	const taskColumn = useAppSelector(selectTasks);
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
				return { title: task, isCompleted: false };
			}),
			status: columnInputsRef.current?.value,
		};
		dispatch(addTask({ task: task, currentBoard: currentBoard }));
	}

	function addToRefs(element: HTMLInputElement) {
		if (element && !subtaskInputsRef.current.includes(element)) {
			subtaskInputsRef.current.push(element);
		}
	}
	
	return (
		<div>
			<h2>Add New Task</h2>
			<form onSubmit={(event) => handleAddTask(event)}>
				<label htmlFor='title'>Title</label>
				<StyledInput ref={titleInputsRef} id='title' type='text' placeholder='e.g. Take coffee break'></StyledInput>
				<label htmlFor='description'>Description</label>
				<StyledTextArea
					ref={descriptionInputsRef}
					id='description'
					placeholder='e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.'
				></StyledTextArea>
				<label htmlFor='subtask'>Subtask</label>
				{subtaskInputs.map((subtaskInput) => (
					<StyledInput
						ref={addToRefs}
						id={subtaskInput.id}
						type='text'
						defaultValue={subtaskInput.value}
						placeholder='e.g. Make coffee'
					></StyledInput>
				))}
				<button
					type='button'
					onClick={() => {
						setSubtaskInputs([...subtaskInputs, { id: uuid(), value: '' }]);
					}}
				>
					Add New Subtask
				</button>
				<label htmlFor='status'>Status</label>
				<select ref={columnInputsRef} name='status' id='status'>
					{taskColumn?.map((column) => (
						<option value={column.name}>{column.name}</option>
					))}
				</select>
				<button type='submit'>Create Task</button>
			</form>
		</div>
	);
};

export default TaskAdd;
