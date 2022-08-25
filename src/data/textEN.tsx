export {
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
	SAVE,
	CANCEL,
	boardDeleteInfo,
    taskDeleteInfo
};

const DELETE = 'Delete';
const COLUMN_ADD = '+ Add New Column';
const COLUMN_PLACEHOLDER = 'e.g. In Progress';
const TASK_DELETE = 'Delete this task?';
const BOARD_NAME = 'Board Name';
const BOARD_ADD = 'Add New Board';
const BOARD_EDIT = 'Edit Board';
const BOARD_DELETE = 'Delete this board?';
const BOARD_CREATE = 'Create New Board';
const BOARD_COLUMNS = 'Board Columns';
const BOARD_PLACEHOLDER = 'e.g. Web Design';
const SAVE = 'Save Changes';
const CANCEL = 'Cancel';
const boardDeleteInfo = (
	boardName: string
) => `Are you sure you want to delete the ‘${boardName}’ board? This action
will remove all columns and tasks and cannot be reversed.`;
const taskDeleteInfo = (
	taskName: string
) => `Are you sure you want to delete the ‘${taskName}’ task and its
subtasks? This action cannot be reversed.`;
