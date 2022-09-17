import {
	BOARD_CREATE,
	BOARD_NAME,
	BOARD_ADD,
	BOARD_PLACEHOLDER,
} from 'data/textEN';
import { StyledBoxSection, StyledLabel } from '../ActionsMenus.styled';
import { Formik, Form } from 'formik';
import { boardAddSchema } from 'helpers/validationSchema';
import { ColumnInputValues } from 'types';
import { addBoard } from 'store/slices/taskActionSlice/taskActionSlice';
import { changeBoard } from 'store/slices/boardSlice/boardSlice';
import { setIsBoardAddShow } from 'store/slices/layoutSlice/layoutSlice';
import { useAppDispatch } from 'store/hooks';
import { v4 as uuid } from 'uuid';
import ColumnsAdd from './ColumnsAdd';
import { Board } from 'data/types/board.type';
import { Button, Input, PopUp } from 'components/UI';

const BoardAdd = () => {
	const dispatch = useAppDispatch();
	const initialValues: ColumnInputValues = {
		boardName: '',
		columns: [{ name: '' }],
	};

	const handleAddBoard = (values: ColumnInputValues) => {
		const board: Board = {
			id: uuid(),
			name: values.boardName,
			columns: values.columns.map((column) => ({
				id: uuid(),
				name: column.name,
				tasks: [],
			})),
		};
		dispatch(addBoard(board));
		dispatch(changeBoard(board.id));
		dispatch(setIsBoardAddShow());
	};

	return (
		<PopUp title={BOARD_ADD} layoutDispatch={() => dispatch(setIsBoardAddShow())}>
			<Formik
				initialValues={initialValues}
				validationSchema={boardAddSchema}
				onSubmit={(values) => handleAddBoard(values)}
			>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='boardName'>{BOARD_NAME}</StyledLabel>
							<Input name='boardName' placeholder={BOARD_PLACEHOLDER} />
						</StyledBoxSection>
						<ColumnsAdd values={values} />
						<Button type='submit' width='full'>
							{BOARD_CREATE}
						</Button>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};
export default BoardAdd;
