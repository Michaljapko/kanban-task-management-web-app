export {
	EMPTY,
	EMPTY_BOARD,
	APLICATION_TITLE,
	DELETE,
	COLUMN_ADD,
	COLUMN_PLACEHOLDER,
	TASK_DELETE,
	BOARD_CREATE,
	BOARD_NAME,
	BOARD_EDIT,
	BOARD_COLUMNS,
	BOARD_ADD,
	BOARD_DELETE,
	BOARD_PLACEHOLDER,
	TASK_EDIT,
	TASK_TITLE,
	TASK_NAME,
	TASK_ADD,
	TASK_ADD_HEADER,
	TASK_DESCRIPTION,
	TASK_PLACEHOLDER,
	TASK_SUBTASK,
	ALL_BOARD,
	STATE,
	STATUS,
	SAVE,
	CANCEL,
	EDIT,
	HIDE_SIDEBAR,
	boardDeleteInfo,
	taskDeleteInfo,
	subtaskInfo,
	subtaskInfoCard,
	SUBTASK_ADD,
};

const EMPTY = 'Create or choose a board to get started.';
const EMPTY_BOARD = 'This board is empty. Create a new column to get started.';
const APLICATION_TITLE = 'Platform Launch';
const DELETE = 'Delete';
const COLUMN_ADD = '+ Add New Column';
const COLUMN_PLACEHOLDER = 'e.g. In Progress';
const TASK_DELETE = 'Delete this task?';
const BOARD_NAME = 'Board Name';
const BOARD_ADD = 'Add New Board';
const BOARD_EDIT = 'Edit Board';
const BOARD_DELETE = 'Delete this board?';
const BOARD_CREATE = '+ Create New Board';
const BOARD_COLUMNS = 'Board Columns';
const BOARD_PLACEHOLDER = 'e.g. Web Design';
const TASK_ADD_HEADER = '+ Add New Task';
const TASK_TITLE = 'Add New Task';
const TASK_ADD = 'Create Task';
const TASK_NAME = 'Title';
const TASK_DESCRIPTION = 'Description';
const TASK_EDIT = 'Edit Task';
const TASK_SUBTASK = 'Subtask';
const SUBTASK_ADD = '+ Add New Column';
const TASK_PLACEHOLDER =
	'e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little.';

const ALL_BOARD = 'All Boards';
const STATUS = 'Status';
const SAVE = 'Save Changes';
const CANCEL = 'Cancel';
const EDIT = 'Edit';
const STATE = 'Current state:';
const HIDE_SIDEBAR = 'Hide Sidebar';
const boardDeleteInfo = (
	boardName: string
) => `Are you sure you want to delete the ‘${boardName}’ board? This action
will remove all columns and tasks and cannot be reversed.`;
const taskDeleteInfo = (
	taskName: string
) => `Are you sure you want to delete the ‘${taskName}’ task and its
subtasks? This action cannot be reversed.`;
const subtaskInfo = (subtasksDone: number, subtasksNum: number) =>
	`Subtask (${subtasksDone} of ${subtasksNum})`;
const subtaskInfoCard = (subtasksDone: number, subtasksNum: number) =>
	`${subtasksDone} of ${subtasksNum} subtasks`;
