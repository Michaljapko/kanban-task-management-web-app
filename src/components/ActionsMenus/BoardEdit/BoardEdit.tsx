import { BOARD_NAME, BOARD_EDIT, SAVE } from 'data/textEN';
import { StyledBoxSection, StyledLabel } from 'theme/MenuBox.styled';
import {
	selectCurrentBoard,
	selectCurrentBoardData,
} from 'store/slices/boardSlice/boardSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Formik, Form } from 'formik';
import { setIsBoardEditShow } from 'store/slices/layoutSlice/layoutSlice';
import { BoardInputValues } from 'types';
import { boardAddSchema } from 'helpers/validationSchema';
import { editBoard } from 'store/slices/taskActionSlice/taskActionSlice';
import { filterAddedColumns } from 'helpers/filterAddedColumns';
import ColumnsEdit from './ColumnsEdit';
import { Button, Input, PopUp } from 'components/UI';

const BoardEdit = () => {
	const dispatch = useAppDispatch();
	const currentBoardId = useAppSelector(selectCurrentBoard);
	const currentBoard = useAppSelector(selectCurrentBoardData);
	const columns = currentBoard.columns;
	const initialValues: BoardInputValues = {
		boardName: currentBoard.name,
		columns: columns.map((column) => ({ id: column.id, name: column.name })),
	};

	const handleEditBoard = (values: BoardInputValues) => {
		const board = {
			currentBoard: currentBoardId,
			board: {
				id: currentBoardId,
				name: values.boardName,
				columns: [...filterAddedColumns(values.columns, columns)],
			},
		};
		dispatch(editBoard(board));
		dispatch(setIsBoardEditShow());
	};

	return (
		<PopUp title={BOARD_EDIT} layoutDispatch={() => dispatch(setIsBoardEditShow())}>
			<Formik
				initialValues={initialValues}
				validationSchema={boardAddSchema}
				onSubmit={(values) => handleEditBoard(values)}
			>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='boardName'>{BOARD_NAME}</StyledLabel>
							<Input name='boardName' type='text' />
						</StyledBoxSection>
						<ColumnsEdit values={values} />
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
