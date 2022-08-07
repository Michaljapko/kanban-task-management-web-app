import { StyledBoxSection, StyledInput, StyledLabel, StyledTextArea } from './TaskEdit.style';
import { selectCurrentTaskData, selectTasksData, columnChangeTask, editTask } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useRef, useState } from 'react';

import Button from '../Button';
import { TasksData } from '../../Types/types';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { selectCurrentColumn } from '../../features/tasks/columnSlice';
import { setIsTaskEditShow } from '../../features/layout/layoutSlice';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';

const TaskEdit = () => {
	const convertToBoolean = (string: string | any) => (string === 'true' ? true : false);

	const [subtaskInputs, setSubtaskInputs] = useState([]);
	const titleInputsRef = useRef<HTMLInputElement>(null);
	const descriptionInputsRef = useRef<HTMLTextAreaElement>(null);
	const columnInputsRef = useRef<HTMLSelectElement>(null);
	const subtaskInputsRef = useRef<HTMLInputElement[]>([]);

	const dispatch = useAppDispatch();
	const taskColumn = useAppSelector(selectTasksData);
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const task = useAppSelector(selectCurrentTaskData);

	function handleEditTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!titleInputsRef.current) return;
		if (!descriptionInputsRef.current) return;
		if (!columnInputsRef.current) return;
		const subtasks = subtaskInputsRef.current.map((input) => input);
		const taskEdited: TasksData = {
			id: task.id,
			title: titleInputsRef.current?.value,
			description: descriptionInputsRef.current?.value,
			subtasks: subtasks.map((subtask) => {
				return { title: subtask.value, isCompleted: convertToBoolean(subtask.getAttribute('data-done')) };
			}),
			status: columnInputsRef.current?.value,
		};

		dispatch(
			columnChangeTask({
				columnId: currentColumn,
				columnTarget: columnInputsRef.current?.value,
				taskId: task.id,
				currentBoard: currentBoard,
				task: taskEdited,
			})
		);
		dispatch(
			editTask({
				columnId: currentColumn,
				taskId: task.id,
				currentBoard: currentBoard,
				task: taskEdited,
			})
		);
		dispatch(setIsTaskEditShow());
	}

	function addToRefs(element: HTMLInputElement) {
		if (element && !subtaskInputsRef.current.includes(element)) {
			subtaskInputsRef.current.push(element);
		}
	}

	return (
		<PopUp title={'Edit Task'} layoutDispatch={() => dispatch(setIsTaskEditShow())}>
			<form onSubmit={(event) => handleEditTask(event)}>
				<StyledBoxSection>
					<StyledLabel htmlFor='title'>Title</StyledLabel>
					<StyledInput ref={titleInputsRef} id='title' type='text' defaultValue={task.title}></StyledInput>
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledLabel htmlFor='description'>Description</StyledLabel>
					<StyledTextArea ref={descriptionInputsRef} id='description' defaultValue={task.description} />
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledLabel htmlFor='subtask'>Subtask</StyledLabel>
					{task.subtasks.map((subtaskInput) => (
						<StyledInput
							ref={addToRefs}
							key={subtaskInput.id}
							type='text'
							defaultValue={subtaskInput.title}
							data-done={subtaskInput.isCompleted}
						></StyledInput>
					))}
					{subtaskInputs.map((subtaskInput) => (
						<StyledInput ref={addToRefs} key={subtaskInput.id} type='text' data-done={false}></StyledInput>
					))}
					<Button
						type='button'
						onClick={() => {
							setSubtaskInputs([...subtaskInputs, { id: uuid(), value: '' }]);
						}}
					>
						+ Add New Subtask
					</Button>
				</StyledBoxSection>
				<StyledBoxSection>
					<StyledLabel htmlFor='status'>Status</StyledLabel>
					<select ref={columnInputsRef} name='status' id='status'>
						{taskColumn?.map((column) => {
							if (currentColumn === column.id) {
								return (
									<option key={column.id} value={column.id} selected>
										{column.name}
									</option>
								);
							}
							return <option value={column.id}>{column.name}</option>;
						})}
					</select>
				</StyledBoxSection>
				<Button type='submit'>Save Changes</Button>
			</form>
		</PopUp>
	);
};

export default TaskEdit;
