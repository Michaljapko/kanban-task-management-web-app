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
import {
	DragDropContext,
	Draggable,
	Droppable,
	DropResult,
} from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeCurrentTask } from '../../features/tasks/taskSlice';
import { changeColumn } from '../../features/tasks/columnSlice';
import {
	selectTasksData,
	columnChangeTaskDrag,
} from '../../features/tasks/taskActionSlice';
import { TasksData } from '../../types/types';
import { getCompletedTask } from '../../helpers/getCompletedTasks';
import { subtaskInfoCard } from '../../data/textEN';
import { getSequenceArr } from '../../helpers/getSequenceArr';
import TaskView from '../TaskView';
import Dot from './Dot';
import Button from '../UI/Button';
import { selectCurrentBoard } from '../../features/tasks/boardSlice';
import theme from '../../theme/theme';

const TaskCards = () => {
	const dispatch = useAppDispatch();
	const columns = useAppSelector(selectTasksData);
	const isTaskShow = useAppSelector(selectIsTaskShow);
	const currentBoard = useAppSelector(selectCurrentBoard);

	const dotColorsNum = theme.dotColors.length;
	const sequenceLength = columns!.length;
	const sequenceArr = getSequenceArr(sequenceLength, dotColorsNum);

	const showTask = (task: TasksData, ColumnId: string) => {
		dispatch(changeColumn(ColumnId));
		dispatch(changeCurrentTask(task.id));
		dispatch(setIsTaskShow());
	};
	const onDragEndHadnle = (event: DropResult) => {
		if (!event.destination) return;
		const payload: {
			currentBoard: string;
			columnId: string;
			columnTarget: string;
			taskId: string;
			index: number;
		} = {
			currentBoard: currentBoard,
			columnId: event.source.droppableId,
			columnTarget: event.destination.droppableId,
			taskId: event.draggableId,
			index: event.destination.index,
		};
		dispatch(columnChangeTaskDrag(payload));
	};
	return (
		<>
			{isTaskShow && <TaskView />}
			<DragDropContext key='{drop}' onDragEnd={(event) => onDragEndHadnle(event)}>
				{columns &&
					columns.map((column, index) => {
						return (
							<Droppable key={column.id} droppableId={column.id}>
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef}>
										<StyledHeading>
											<Dot colorIndex={sequenceArr[index]} />
											{column.name} ({column.tasks.length})
										</StyledHeading>
										{columns &&
											column.tasks.map((task, index) => (
												<Draggable key={task.id} draggableId={task.id} index={index}>
													{(provided) => (
														<StyledCard
															onClick={() => showTask(task, column.id)}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															ref={provided.innerRef}
														>
															<StyledTitle>{task.title}</StyledTitle>
															<StyledParagraph>
																{subtaskInfoCard(getCompletedTask(task.subtasks), task.subtasks.length)}
															</StyledParagraph>
														</StyledCard>
													)}
												</Draggable>
											))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						);
					})}
			</DragDropContext>
			<Button onClick={() => dispatch(setIsBoardEditShow())} variant={'buttonBig'}>
				+ New Column
			</Button>
		</>
	);
};

export default TaskCards;
