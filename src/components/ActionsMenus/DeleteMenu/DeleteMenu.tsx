import {
  BOARD_DELETE,
  DELETE,
  CANCEL,
  TASK_DELETE,
  boardDeleteInfo,
  taskDeleteInfo,
} from 'data/textEN';
import { setIsDeleteBoardShow, setIsDeleteTaskShow } from 'store/slices/layoutSlice/layoutSlice';
import {
  changeTask,
  deleteBoard,
  deleteTask,
  selectCurrentBoardName,
  selectCurrentTaskName,
} from 'store/slices/kanbanSlice/kanbanSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { StyledText, StyledWrapper } from './DeleteMenu.styled';
import { DeleteMenuProps } from './DeleteMenu.types';
import { Button, PopUp } from 'components/UI';

const DeleteMenu = ({ variant }: DeleteMenuProps) => {
  const dispatch = useAppDispatch();
  const boardName = useAppSelector(selectCurrentBoardName);
  const taskName = useAppSelector(selectCurrentTaskName);

  const getTitle = () => {
    if (variant === 'board') return BOARD_DELETE;
    if (variant === 'task') return TASK_DELETE;
  };
  const getText = () => {
    if (variant === 'board') return boardDeleteInfo(boardName);
    if (variant === 'task') return taskDeleteInfo(taskName!);
  };
  const boardDeleteHandler = () => {
    dispatch(deleteBoard());
    dispatch(setIsDeleteBoardShow());
  };
  const taskDeleteHandler = () => {
    dispatch(deleteTask());
    dispatch(changeTask(''));
    dispatch(setIsDeleteTaskShow());
  };
  const closeHandler = () => {
    if (variant === 'board') dispatch(setIsDeleteBoardShow());
    if (variant === 'task') dispatch(setIsDeleteTaskShow());
  };
  const deleteHandler = () => {
    if (variant === 'board') boardDeleteHandler();
    if (variant === 'task') taskDeleteHandler();
  };

  return (
    <PopUp title={getTitle()} layoutDispatch={() => closeHandler()} variant={'delete'}>
      <StyledText>{getText()}</StyledText>
      <StyledWrapper>
        <Button variant="delete" width="full" onClick={() => deleteHandler()}>
          {DELETE}
        </Button>
        <Button variant="secondary" width="full" onClick={() => () => closeHandler()}>
          {CANCEL}
        </Button>
      </StyledWrapper>
    </PopUp>
  );
};
export default DeleteMenu;
