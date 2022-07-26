import { useState } from 'react';

const TaskView = ({ task }: any) => {
	return (
		<div>
			<p>{task.title}</p>
			<p>{task.description}</p>
			{task.subtasks.map((subtask: any) => (
				<div>
					{subtask.isCompleted ? (
						<input type='checkbox' id='subscribeNews' name='subscribe' checked />
					) : (
						<input type='checkbox' id='subscribeNews' name='subscribe' />
					)}
					<p>{subtask.title}</p>
				</div>
			))}
			<p>Current state:</p>
		</div>
	);
};

export default TaskView;
