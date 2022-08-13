import { StyledBoxSection, StyledColumnInputBox, StyledLabel } from './BoardEdit.styled';
import { selectBoards, selectCurrentBoard } from '../../features/tasks/boardSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { BoardInputValues } from '../../Types/types';
import Button from '../Button';
import cross from '../../assets/icon-cross.svg';
import { editBoard } from '../../features/tasks/tasksSlice';
import { setIsBoardEditShow } from '../../features/layout/layoutSlice';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import { Formik, Form, FieldArray } from 'formik';
import Input from '../Input';
import { boardAddSchema } from '../../helpers/validationSchema';

const BoardEdit = () => {
	const currentBoardId = useAppSelector(selectCurrentBoard);
	const currentBoard = useAppSelector(selectBoards).find((boards) => boards.id === currentBoardId);
	const columns = currentBoard?.columns;
	const dispatch = useAppDispatch();

	const getColumns = () => {
		if (columns === undefined) return [{ id: 'null', name: 'null' }];
		return columns.map((column) => {
			return { id: column.id, name: column.name };
		});
	};

	const initialValues: BoardInputValues = {
		name: currentBoard!.name,
		columns: getColumns().map((column) => {
			return {
				id: column.id,
				name: column.name,
			};
		}),
	};

	function handleEditBoard(values: BoardInputValues) {
		const columnsAdded = values.columns.map((column) => {
			const existingColumn = columns?.find((currentColumn) => currentColumn.id === column.id);
			if (existingColumn) return { ...existingColumn, name: column.name };
			return { name: column.name, id: column.id, tasks: [] };
		});
		const board = {
			currentBoard: currentBoardId,
			board: {
				id: currentBoardId,
				name: values.name,
				columns: [...columnsAdded],
			},
		};
		dispatch(editBoard(board));
		dispatch(setIsBoardEditShow());
	}

	return (
		<PopUp title={'Edit Board'} layoutDispatch={() => dispatch(setIsBoardEditShow())}>
			<Formik initialValues={initialValues} validationSchema={boardAddSchema} onSubmit={(values) => handleEditBoard(values)}>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='name'>Board Name</StyledLabel>
							<Input name='name' type='text' placeholder='e.g. Take coffee break' />
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='columns'>Board Columns</StyledLabel>
							<FieldArray
								name='columns'
								render={({ push, remove }) => (
									<>
										{values.columns.length > 0 &&
											values.columns.map((columns, index) => (
												<StyledColumnInputBox key={index}>
													<Input name={`columns.${index}.name`} placeholder='e.g. In Progress' />
													<img src={cross} alt='Delete' onClick={() => remove(index)} />
												</StyledColumnInputBox>
											))}
										<Button type='button' variant='secondary' onClick={() => push({ id: uuid(), name: '' })}>
											+ Add New Column
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
						<Button type='submit'>Save Change</Button>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};
export default BoardEdit;
