import {
	COLUMN_ADD,
	COLUMN_PLACEHOLDER,
	BOARD_CREATE,
	BOARD_NAME,
	BOARD_COLUMNS,
	BOARD_ADD,
	BOARD_PLACEHOLDER,
} from '../../data/textEN';
import {
	StyledBoxSection,
	StyledColumnInputBox,
	StyledCrossIcon,
	StyledLabel,
} from './BoardAdd.styled';
import { Formik, Form, FieldArray } from 'formik';
import { boardAddSchema } from '../../helpers/validationSchema';
import { Board, ColumnInputValues } from '../../types/types';
import { addBoard } from '../../features/tasks/taskActionSlice';
import { changeBoard } from '../../features/tasks/boardSlice';
import { setIsBoardAddShow } from '../../features/layout/layoutSlice';
import { useAppDispatch } from '../../app/hooks';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import Button from '../Button';
import Input from '../Input';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper';


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
										<ScrollWrapper>
											{values.columns.length > 0 &&
												values.columns.map((columns, index) => (
													<StyledColumnInputBox key={index}>
														<Input
															name={`columns.${index}.name`}
															placeholder={COLUMN_PLACEHOLDER}
														/>
														<StyledCrossIcon onClick={() => remove(index)} />
													</StyledColumnInputBox>
												))}
										</ScrollWrapper>
										<Button
											type='button'
											variant='secondary'
											width='full'
											onClick={() => push({ name: '' })}
										>
											{COLUMN_ADD}
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
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
