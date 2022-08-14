import { StyledBoxSection, StyledColumnInputBox, StyledLabel } from './BoardAdd.styled';
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
	const initialValues: ColumnInputValues = { name: '', columns: [{ name: '' }] };
	const dispatch = useAppDispatch();

	const handleAddBoard = (values: ColumnInputValues) => {
		const board: Board = {
			id: uuid(),
			name: values.name,
			columns: values.columns.map((column) => {
				return { name: column.name, id: uuid(), tasks: [] };
			}),
		};

		dispatch(addBoard(board));
		dispatch(changeBoard(board.id));
		dispatch(setIsBoardAddShow());
	};

	return (
		<PopUp title={'Add New Board'} layoutDispatch={() => dispatch(setIsBoardAddShow())}>
			<Formik initialValues={initialValues} validationSchema={boardAddSchema} onSubmit={(values) => handleAddBoard(values)}>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='name'>Board Name</StyledLabel>
							<Input name='name' placeholder='e.g. Web Design' />
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='column'>Board Columns</StyledLabel>
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
										<Button type='button' variant='secondary' onClick={() => push({ name: '' })}>
											+ Add New Column
										</Button>
									</>
								)}
							/>
						</StyledBoxSection>
						<StyledBoxSection>
							<Button type='submit'>Create New Board</Button>
						</StyledBoxSection>
					</Form>
				)}
			</Formik>
		</PopUp>
	);
};

export default BoardAdd;
