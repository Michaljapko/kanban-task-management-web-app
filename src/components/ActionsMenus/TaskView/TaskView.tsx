import {
	selectTasksData,
	columnChangeTask,
	selectCurrentTaskData,
	selectCurrentBoard,
	selectCurrentColumn,
	changeColumn,
	changeTask,
} from 'store/slices/kanbanSlice/kanbanSlice';
import {
	selectLayout,
	setIsDropdownTaskShow,
	setIsTaskShow,
} from 'store/slices/layoutSlice/layoutSlice';
import {
	StyledBoxSection,
	StyledParagraph,
} from 'components/ActionsMenus/ActionsMenus.styled';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { SelectInputOption } from 'components/UI/SelectInput/SelectInput.type';
import { StyledDescription } from './TaskView.styled';
import { STATE } from 'data/textEN';
import SubtaskView from './SubtaskView';
import { DropDown, Ellipsis, PopUp, SelectInput } from 'components/UI';

const TaskView = () => {
	const dispatch = useAppDispatch();
	const currentColumn = useAppSelector(selectCurrentColumn);
	const currentBoard = useAppSelector(selectCurrentBoard);
	const taskColumn = useAppSelector(selectTasksData);
	const isDropdownTaskShow = useAppSelector(selectLayout).isDropdownTaskShow;
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
				dispatch(changeTask(''));
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
