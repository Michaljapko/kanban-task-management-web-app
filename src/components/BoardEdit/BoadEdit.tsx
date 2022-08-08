import { StyledBoxSection, StyledColumnInputBox, StyledInput, StyledLabel } from './BoardEdit.styled';
import { selectBoards, selectCurrentBoard } from '../../features/tasks/boardSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useRef, useState } from 'react';

import Button from '../Button';
import cross from '../../assets/icon-cross.svg';
import { editBoard } from '../../features/tasks/tasksSlice';
import { setIsBoardEditShow } from '../../features/layout/layoutSlice';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import { TasksData } from '../../Types/types';
import { useFormik } from 'formik';

const BoardEdit = () => {
	const [columnInputs, setColumnInputs] = useState<{ id: string; name: string; tasks: TasksData[] }[]>([]);
	const [columnInputsRef, setColumnInputsRef] = useState<any>(useRef([]));
	const currentBoardId = useAppSelector(selectCurrentBoard);
	const currentBoard = useAppSelector(selectBoards).find((boards) => boards.id === currentBoardId);
	const columns = currentBoard?.columns;
	const dispatch = useAppDispatch();
	const nameInputsRef = useRef<HTMLInputElement>(null);

	function addToRefs(element: HTMLInputElement) {
		if (element === null) return;
		if (columnInputsRef.current.includes(element)) return;
		setColumnInputsRef(element);
	}

	function deleteColumn(columnId: string) {
		const newColumns = columnInputs.filter((column) => columnId !== column.id);
		console.log(columnInputs, 'inputs');
		const refIndex = columnInputsRef.current.findIndex((column) => columnId === column.id);
		columnInputsRef.current.splice(refIndex, 1);
	}

	function handleEditBoard(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!nameInputsRef.current) return;
		if (!columnInputsRef.current) return;
		if (!currentBoard) return;
		const columnsInput = columnInputsRef.current.map((input) => input);

		const columnsAdded = columnsInput.map((column) => {
			const existingColumn = columns?.find((currentColumn) => currentColumn.id === column.id);
			if (existingColumn) return { ...existingColumn, name: column.value };
			return { name: column.value, id: column.id, tasks: [] };
		});

		const board = {
			currentBoard: currentBoardId,
			board: {
				id: currentBoardId,
				name: nameInputsRef.current.value,
				columns: [...columnsAdded],
			},
		};
		dispatch(editBoard(board));
		dispatch(setIsBoardEditShow());
	}

	return (
		<PopUp title={'Edit Board'} layoutDispatch={() => dispatch(setIsBoardEditShow())}>
			<form onSubmit={(event) => handleEditBoard(event)}>
				<StyledBoxSection>
					<StyledLabel htmlFor='name'>Board Name</StyledLabel>
					<StyledInput ref={nameInputsRef} id='name' type='text' placeholder='e.g. Web Design' defaultValue={currentBoard?.name} />
				</StyledBoxSection>

				<StyledBoxSection>
					<StyledLabel htmlFor='column'>Columns</StyledLabel>

					{columnInputs?.map((columnInput: { id: string; name: string }) => (
						<StyledColumnInputBox>
							<StyledInput ref={addToRefs} key={columnInput.id} id={columnInput.id} type='text' defaultValue={columnInput.name} />{' '}
							<img src={cross} key={columnInput.id + 'del'} onClick={() => deleteColumn(columnInput.id)} alt='Delete' />
						</StyledColumnInputBox>
					))}
					<Button
						type='button'
						onClick={() => {
							setColumnInputs([...columnInputs, { id: uuid(), name: '', tasks: [] }]);
						}}
					>
						Add New Column
					</Button>
				</StyledBoxSection>

				<StyledBoxSection>
					<Button type='submit'>Save Changes</Button>
				</StyledBoxSection>
			</form>
		</PopUp>
	);
};

export default BoardEdit;
