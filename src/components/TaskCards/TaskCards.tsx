import {
	StyledCard,
	StyledHeading,
	StyledParagraph,
	StyledTitle,
} from './TaskCards.style';
import {
	selectIsTaskShow,
	setIsBoardEditShow,
	setIsTaskShow,
} from '../../features/layout/layoutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeCurrentTask } from '../../features/tasks/taskSlice';
import { changeColumn } from '../../features/tasks/columnSlice';
import { selectTasksData } from '../../features/tasks/tasksSlice';
import { TasksData } from '../../types/types';
import { getCompletedTask } from '../../helpers/getCompletedTasks';
import { subtaskInfoCard } from '../../data/textEN';
import { getSequenceArr } from '../../helpers/getSequenceArr';
import TaskView from '../TaskView';
import Dot from '../Dot';
import Button from '../Button';

const TaskCards = () => {
	const dispatch = useAppDispatch();
	const columns = useAppSelector(selectTasksData);
	const isTaskShow = useAppSelector(selectIsTaskShow);

	const DOT_COLORS_NUM = 4;
	const sequenceLength = columns!.length;
	const sequenceArr = getSequenceArr(sequenceLength, DOT_COLORS_NUM);

	const showTask = (task: TasksData, ColumnId: string) => {
		dispatch(changeColumn(ColumnId));
		dispatch(changeCurrentTask(task.id));
		dispatch(setIsTaskShow());
	};

	return (
		<>
			{isTaskShow && <TaskView />}
			{columns &&
				columns.map((column, index) => {
					return (
						<div key={column.id}>
							<StyledHeading>
								<Dot colorIndex={sequenceArr[index]} />
								{column.name} ({column.tasks.length})
							</StyledHeading>
							{column.tasks.map((task) => (
								<StyledCard
									onClick={() => showTask(task, column.id)}
									key={task.id}
								>
									<StyledTitle>{task.title}</StyledTitle>
									<StyledParagraph>
										{subtaskInfoCard(
											getCompletedTask(task.subtasks),
											task.subtasks.length
										)}
									</StyledParagraph>
								</StyledCard>
							))}
						</div>
					);
				})}
			<Button
				onClick={() => dispatch(setIsBoardEditShow())}
				variant={'buttonBig'}
			>
				+ New Column
			</Button>
		</>
	);
};

export default TaskCards;
