import { Boards } from '../types/types';

export const data: Boards = {
	boards: [
		{
			id: '342a21',
			name: 'Test Board',
			columns: [
				{
					id: '22d21',
					name: 'Todo',
					tasks: [
						{
							id: '2441a',
							title: 'Check task managment',
							description:
								"These little cards are your tasks. You see this icon in the top right corner? By clicking it you'll by able to edit task. Try to do each subtask and make familry with this futures.",
							status: 'Todo',
							subtasks: [
								{
									id: '22223s1',
									title: 'Change title of task',
									isCompleted: false,
								},
								{ id: '22223421', title: 'Add new task', isCompleted: false },
								{
									id: '22223s421',
									title: 'Add new subtask',
									isCompleted: false,
								},
								{
									id: '223s42',
									title: 'Delete first subtask',
									isCompleted: false,
								},
							],
						},
						{
							id: '244s122',
							title: 'Check state managment',
							description:
								'Same like tasks and boards you can modify state. To add new state edit your board or click big button in right corrner. You can change taks state by drag and drop or selecting right one in "Current state" section. ',
							status: 'Done',
							subtasks: [
								{
									id: '222231',
									title: 'Create "Doing" state',
									isCompleted: false,
								},
								{
									id: '22223421',
									title: 'Move this task to "Doing" state',
									isCompleted: false,
								},
							],
						},
						{
							id: '2441a2',
							title: 'Create your own board',
							description:
								'You can delete, edit and add new boards. Test each function and mark them complete.',
							status: 'Todo',
							subtasks: [
								{
									id: '22223s1',
									title: 'Create new board',
									isCompleted: false,
								},
								{ id: '22223421', title: 'Edit board', isCompleted: false },
								{ id: '22223421', title: 'Delete board', isCompleted: false },
							],
						},
					],
				},
				{
					id: '222da21',
					name: 'Done',
					tasks: [
						{
							id: '2442a1112',
							title: 'Open test board',
							description: 'Open Test Board and expoler the futures',
							status: 'working',
							subtasks: [
								{
									id: '12a2231',
									title: 'Expoler the futures',
									isCompleted: true,
								},
							],
						},
					],
				},
			],
		},
	],
};
