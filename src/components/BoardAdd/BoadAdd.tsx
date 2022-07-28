import { useRef, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addBoard } from '../../features/tasks/tasksSlice';
import { Boards } from '../../Types/types';
import { v4 as uuid } from 'uuid';
import Button from '../Button';
import { StyledBack, StyledBox, StyledInput, StyledColumnInputBox, StyledLabel, StyledBoxSection } from './BoardAdd.styled';
import cross from '../../assets/icon-cross.svg';
import { setIsBoardAddShow } from '../../features/layout/layoutSlice';

const BoardAdd = () => {
	const [columnInputs, setColumnInputs] = useState([{ id: uuid(), value: '' }]);

	const dispatch = useAppDispatch();
	const nameInputsRef = useRef<HTMLInputElement>(null);
	const columnInputsRef = useRef<HTMLInputElement[]>([]);

	function addToRefs(element: HTMLInputElement) {
		if (element && !columnInputsRef.current.includes(element)) {
			columnInputsRef.current.push(element);
		}
	}

	function handleAddBoard(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!nameInputsRef.current) return;
		if (!columnInputsRef.current) return;

		const columns = columnInputsRef.current.map((input) => input.value);
		const board: {
			id: string;
			name: string;
			columns: {
				id: string;
				name: string;
			}[];
		} = {
			id: uuid(),
			name: nameInputsRef.current?.value,
			columns: columns.map((column) => {
				return { name: column, id: uuid(), tasks: [] };
			}),
		};
		dispatch(addBoard(board));
	}

	return (
		<StyledBack onClick={() => dispatch(setIsBoardAddShow())}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				<StyledBoxSection>
					<h2>Add New Board</h2>
				</StyledBoxSection>
				<form onSubmit={(event) => handleAddBoard(event)}>
					<StyledBoxSection>
						<StyledLabel htmlFor='name'>Board Name</StyledLabel>
						<StyledInput ref={nameInputsRef} id='name' type='text' placeholder='e.g. Web Design' />
					</StyledBoxSection>
					<StyledBoxSection>
						<StyledLabel htmlFor='column'>Subtask</StyledLabel>
						{columnInputs.map((columnInput) => (
							<StyledColumnInputBox>
								<StyledInput ref={addToRefs} id={columnInput.id} type='text' defaultValue={columnInput.value} /> <img src={cross} alt='Delete' />
							</StyledColumnInputBox>
						))}
						<Button
							type='button'
							onClick={() => {
								setColumnInputs([...columnInputs, { id: uuid(), value: '' }]);
							}}
						>
							Add New Column
						</Button>
					</StyledBoxSection>
					<StyledBoxSection>
						<Button type='submit'>Create New Board</Button>
					</StyledBoxSection>
				</form>
			</StyledBox>
		</StyledBack>
	);
};

export default BoardAdd;
