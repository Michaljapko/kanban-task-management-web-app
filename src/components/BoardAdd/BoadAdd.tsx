import {
	DELETE,
	COLUMN_ADD,
	COLUMN_PLACEHOLDER,
	BOARD_CREATE,
	BOARD_NAME,
	BOARD_COLUMNS,
	BOARD_ADD,
	BOARD_PLACEHOLDER
} from '../../data/textEN';
import {
	StyledBoxSection,
	StyledColumnInputBox,
	StyledLabel,
} from './BoardAdd.styled';
import { Formik, Form, FieldArray } from 'formik';
import { boardAddSchema } from '../../helpers/validationSchema';
import { Board, ColumnInputValues } from '../../types/types';
import { addBoard } from '../../features/tasks/tasksSlice';
import { changeBoard } from '../../features/tasks/boardSlice';
import { setIsBoardAddShow } from '../../features/layout/layoutSlice';
import { useAppDispatch } from '../../app/hooks';
import { v4 as uuid } from 'uuid';
import cross from '../../assets/icon-cross.svg';
import PopUp from '../PopUp';
import Button from '../Button';
import Input from '../Input';

const BoardAdd = () => {
	const dispatch = useAppDispatch();
	const initialValues: ColumnInputValues = {
		name: '',
		columns: [{ name: '' }],
	};

	const handleAddBoard = (values: ColumnInputValues) => {
		const board: Board = {
			id: uuid(),
			name: values.name,
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
		<PopUp
			title={BOARD_ADD}
			layoutDispatch={() => dispatch(setIsBoardAddShow())}
		>
			<Formik
				initialValues={initialValues}
				validationSchema={boardAddSchema}
				onSubmit={(values) => handleAddBoard(values)}
			>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='name'>{BOARD_NAME}</StyledLabel>
							<Input name='name' placeholder={BOARD_PLACEHOLDER} />
						</StyledBoxSection>

						<StyledBoxSection>
							<StyledLabel htmlFor='column'>{BOARD_COLUMNS}</StyledLabel>
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
											onClick={() => push({ name: '' })}
										>
											{COLUMN_ADD}
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<Button type='submit'>{BOARD_CREATE}</Button>
						</StyledBoxSection>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};
export default BoardAdd;
