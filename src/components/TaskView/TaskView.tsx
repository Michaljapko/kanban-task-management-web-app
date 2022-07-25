import { useState } from 'react';

const TaskView = ({ task }: any) => {
	const [isTaskShow, setIsTaskShow] = useState<boolean>(false);
    
	function show() {
		setIsTaskShow(true);
	}

	return <>{isTaskShow && task.description}</>;
};

export default TaskView;
