import {
	selectTasksData,
	columnChangeTask,
	selectCurrentTaskData,
} from '../../features/tasks/taskActionSlice';
import {
	selectIsDropdownTaskShow,
	setIsDropdownTaskShow,
	setIsTaskShow,
} from '../../features/layout/layoutSlice';
import {
	changeColumn,
	selectCurrentColumn,
} from '../../features/tasks/columnSlice';
import { StyledBoxSection, StyledParagraph } from '../../theme/MenuBox.styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import { changeCurrentTask } from '../../features/tasks/taskSlice';
import { StyledDescription } from './TaskView.styled';
import { SelectInputOption } from '../../types/types';
import { STATE } from '../../data/textEN';
import SelectInput from '../UI/SelectInput';
import Ellipsis from '../UI/Ellipsis';
import DropDown from '../UI/DropDown';
import PopUp from '../UI/PopUp';
import SubtaskView from './SubtaskView';

const TaskView = () => {
	const dispatch = useAppDispatch();
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const taskColumn = useAppSelector(selectTasksData);
	const isDropdownTaskShow = useAppSelector(selectIsDropdownTaskShow);
	const task = useAppSelector(selectCurrentTaskData);

	const taskColumsData = taskColumn!.map((column) => ({
		value: column.id,
		label: column.name,
	}));

	const columnChangeHandler = (event: SelectInputOption) => {
		const taskUpdated = { ...task };
		dispatch(changeColumn(event!.value));
		dispatch(
			columnChangeTask({
				columnId: currentColumn,
				columnTarget: event!.value,
				taskId: task.id,
				currentBoard: currentBoard,
				task: taskUpdated,
			})
		);
	};

	const ellipsisButton = (
		<>
			<Ellipsis
				onClick={() => {
					dispatch(setIsDropdownTaskShow());
				}}
			/>
			{isDropdownTaskShow && <DropDown variant='task' />}
		</>
	);

	return (
		<PopUp
			title={task.title}
			layoutDispatch={() => {
				dispatch(setIsTaskShow());
				dispatch(changeCurrentTask(''));
			}}
			headingElement={ellipsisButton}
		>
			<StyledBoxSection>
				<StyledDescription>{task.description}</StyledDescription>
			</StyledBoxSection>
			<SubtaskView task={task} />
			<StyledBoxSection>
				<StyledParagraph>{STATE}</StyledParagraph>
				<SelectInput
					onChange={(event) => columnChangeHandler(event!)}
					options={taskColumsData}
					defaultValue={taskColumsData.find((columns) => columns.value === currentColumn)}
				/>
			</StyledBoxSection>
		</PopUp>
	);
};

export default TaskView;
