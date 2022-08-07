import { StyledBack, StyledBox, StyledBoxSection, StyledColumnInputBox, StyledHeading, StyledInput, StyledLabel } from './BoardEdit.styled';
import { selectBoards, selectCurrentBoard } from '../../features/tasks/boardSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useRef, useState } from 'react';

import Button from '../Button';
import cross from '../../assets/icon-cross.svg';
import { editBoard } from '../../features/tasks/tasksSlice';
import { setIsBoardEditShow } from '../../features/layout/layoutSlice';
import { v4 as uuid } from 'uuid';

const BoardEdit = () => {
	const currentBoardId = useAppSelector(selectCurrentBoard);
	const currentBoard = useAppSelector(selectBoards).find((boards) => boards.id === currentBoardId);
	const columns = currentBoard?.columns;
	const [columnInputs, setColumnInputs] = useState<any>([]);
	const dispatch = useAppDispatch();
	const nameInputsRef = useRef<HTMLInputElement>(null);
	const columnInputsRef = useRef<HTMLInputElement[]>([]);

	function addToRefs(element: HTMLInputElement) {
		if (element && !columnInputsRef.current.includes(element)) {
			columnInputsRef.current.push(element);
		}
	}

	function handleEditBoard(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!nameInputsRef.current) return;
		if (!columnInputsRef.current) return;

		const columnsInput = columnInputsRef.current.map((input) => input.value);
		const columnsAdded = columnsInput.map((column) => {
			return { name: column, id: uuid(), tasks: [] };
		});
		const board = {
			currentBoard: currentBoardId,
			board: {
				id: currentBoardId,
				name: nameInputsRef.current?.value,
				columns: [...currentBoard?.columns, ...columnsAdded],
			},
		};
		console.log(board);
		dispatch(editBoard(board));

		dispatch(setIsBoardEditShow());
	}

	return (
		<StyledBack onClick={() => dispatch(setIsBoardEditShow())}>
			<StyledBox onClick={(e) => e.stopPropagation()}>
				<StyledBoxSection>
					<StyledHeading>Edit Board</StyledHeading>
				</StyledBoxSection>
				<form onSubmit={(event) => handleEditBoard(event)}>
					<StyledBoxSection>
						<StyledLabel htmlFor='name'>Board Name</StyledLabel>
						<StyledInput ref={nameInputsRef} id='name' type='text' placeholder='e.g. Web Design' defaultValue={currentBoard?.name} />
					</StyledBoxSection>
					<StyledBoxSection>
						<StyledLabel htmlFor='column'>Columns</StyledLabel>
						{columns?.map((columnInput) => (
							<StyledColumnInputBox>
								<StyledInput ref={addToRefs} id={columnInput.id} type='text' defaultValue={columnInput.name} /> <img src={cross} alt='Delete' />
							</StyledColumnInputBox>
						))}
						{columnInputs?.map((columnInput) => (
							<StyledColumnInputBox>
								<StyledInput ref={addToRefs} id={columnInput.id} type='text' defaultValue={columnInput.name} /> <img src={cross} alt='Delete' />
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
						<Button type='submit'>Save Changes</Button>
					</StyledBoxSection>
				</form>
			</StyledBox>
		</StyledBack>
	);
};

export default BoardEdit;
