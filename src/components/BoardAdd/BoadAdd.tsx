import { StyledBoxSection, StyledColumnInputBox, StyledInput, StyledLabel } from './BoardAdd.styled';
import { Board } from '../../Types/types';
import Button from '../Button';
import { addBoard } from '../../features/tasks/tasksSlice';
import { changeBoard } from '../../features/tasks/boardSlice';
import cross from '../../assets/icon-cross.svg';
import { setIsBoardAddShow } from '../../features/layout/layoutSlice';
import { useAppDispatch } from '../../app/hooks';
import { v4 as uuid } from 'uuid';
import PopUp from '../PopUp';
import { Formik, Form, FieldArray } from 'formik';

const BoardAdd = () => {
	interface ColumnInputValues {
		name: string;
		columns: { name: string }[];
	}
	const initialValues: ColumnInputValues = { name: '', columns: [{ name: '' }] };
	const dispatch = useAppDispatch();

	function handleAddBoard(values: ColumnInputValues) {
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
	}

	return (
		<PopUp title={'Add New Board'} layoutDispatch={() => dispatch(setIsBoardAddShow())}>
			<Formik initialValues={initialValues} onSubmit={(values) => handleAddBoard(values)}>
				{({ values }) => (
					<Form>
						<StyledBoxSection>
							<StyledLabel htmlFor='name'>Board Name</StyledLabel>
							<StyledInput name='name' placeholder='e.g. Web Design' />
						</StyledBoxSection>
						<StyledBoxSection>
							<StyledLabel htmlFor='column'>Board Columns</StyledLabel>
							<FieldArray
								name='columns'
								render={({ push, remove }) => (
									<>
										{values.columns.length > 0 &&
											values.columns.map((columns, index) => (
												<StyledColumnInputBox>
													<StyledInput name={`columns.${index}.name`} placeholder='e.g. In Progress' />
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
