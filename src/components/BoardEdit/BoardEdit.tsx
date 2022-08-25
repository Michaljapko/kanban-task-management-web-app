import {
	COLUMN_ADD,
	BOARD_NAME,
	BOARD_COLUMNS,
	COLUMN_PLACEHOLDER,
	DELETE,
	BOARD_EDIT,
	SAVE,
} from '../../data/textEN';
import {
	StyledBoxSection,
	StyledColumnInputBox,
	StyledLabel,
} from './BoardEdit.styled';
import {
	selectCurrentBoard,
	selectCurrentBoardData,
} from '../../features/tasks/boardSlice';
import { Formik, Form, FieldArray } from 'formik';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setIsBoardEditShow } from '../../features/layout/layoutSlice';
import { BoardInputValues } from '../../types/types';
import { boardAddSchema } from '../../helpers/validationSchema';
import { editBoard } from '../../features/tasks/tasksSlice';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import Input from '../Input';
import Button from '../Button';
import cross from '../../assets/icon-cross.svg';
import { filterAddedColumns } from '../../helpers/filterAddedColumns';

const BoardEdit = () => {
	const dispatch = useAppDispatch();
	const currentBoardId = useAppSelector(selectCurrentBoard);
	const currentBoard = useAppSelector(selectCurrentBoardData);
	const columns = currentBoard.columns;
	const initialValues: BoardInputValues = {
		name: currentBoard!.name,
		columns: columns.map((column) => ({ id: column.id, name: column.name })),
	};

	const handleEditBoard = (values: BoardInputValues) => {
		const board = {
			currentBoard: currentBoardId,
			board: {
				id: currentBoardId,
				name: values.name,
				columns: [...filterAddedColumns(values.columns, columns)],
			},
		};
		dispatch(editBoard(board));
		dispatch(setIsBoardEditShow());
	};

	return (
		<PopUp
			title={BOARD_EDIT}
			layoutDispatch={() => dispatch(setIsBoardEditShow())}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={boardAddSchema}
				onSubmit={(values) => handleEditBoard(values)}
			>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='name'>{BOARD_NAME}</StyledLabel>
							<Input name='name' type='text' />
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='columns'>{BOARD_COLUMNS}</StyledLabel>
							<FieldArray
								name='columns'
								render={({ push, remove }) => (
									<>
										{values.columns.length > 0 &&
											values.columns.map((columns, index) => (
												<StyledColumnInputBox key={index}>
													<Input
														name={`columns.${index}.name`}
														placeholder={COLUMN_PLACEHOLDER}
													/>
													<img
														src={cross}
														alt={DELETE}
														onClick={() => remove(index)}
													/>
												</StyledColumnInputBox>
											))}
										<Button
											type='button'
											variant='secondary'
											width='full'
											onClick={() => push({ id: uuid(), name: '' })}
										>
											{COLUMN_ADD}
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
						<Button type='submit' width='full'>
							{SAVE}
						</Button>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};
export default BoardEdit;
