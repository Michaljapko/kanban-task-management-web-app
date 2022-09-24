import { setIsTaskAddShow, selectLayout } from 'store/slices/layoutSlice/layoutSlice';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { TASK_ADD_HEADER } from 'data/textEN';
import { selectTasksData } from 'store/slices/kanbanSlice/kanbanSlice';
import { Button } from 'components/UI';

const AddTaskButton = () => {
  const dispatch = useAppDispatch();
  const taskData = useAppSelector(selectTasksData);
  const currentDevice = useAppSelector(selectLayout).device;

  return (
    <>
      {taskData && taskData.length > 0 && currentDevice === 'desktop' && (
        <Button
          variant="header"
          onClick={() => {
            dispatch(setIsTaskAddShow());
          }}>
          {TASK_ADD_HEADER}
        </Button>
      )}

      {taskData && taskData.length > 0 && currentDevice === 'mobile' && (
        <Button
          icon="plus"
          variant="headerMobile"
          onClick={() => {
            dispatch(setIsTaskAddShow());
          }}
        />
      )}

      {!taskData && currentDevice === 'desktop' && (
        <Button variant="headerOff">{TASK_ADD_HEADER}</Button>
      )}

      {!taskData && currentDevice === 'mobile' && <Button icon="plus" variant="headerOffMobile" />}
    </>
  );
};
export default AddTaskButton;
