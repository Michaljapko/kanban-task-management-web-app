import { Boards } from '../Types/types';

export const data: Boards = {
	boards: [
		{
			id: '342a21',
			name: 'Test Board',
			columns: [
				{
					id: '2221',
					name: 'done',
					tasks: [
						{
							id: '24412',
							title: 'Research pricing points of various competitors and trial different business models',
							description:
								'We know what were planning to build for version one. Now we need to finalise the first pricing model well use. Keep iterating the subtasks until we have a coherent proposition.',
							status: 'Done',
							subtasks: [
								{
									id: '222231',
									title:
										'We know what were planning to build for version one. Now we need to finalise the first pricing model well use. Keep iterating the subtasks until we have a coherent proposition.',
									isCompleted: true,
								},
								{ id: '22223421', title: 'Go in', isCompleted: false },
							],
						},
						{
							id: '244122',
							title: 'Do smth',
							description: 'Go out and smth',
							status: 'Done',
							subtasks: [
								{ id: '222231', title: 'Go out', isCompleted: true },
								{ id: '22223421', title: 'Go in', isCompleted: false },
							],
						},
					],
				},
				{
					id: '2223121',
					name: 'working',
					tasks: [
						{
							id: '24421112',
							title: 'Do nothing',
							description: 'Go out and smth',
							status: 'working',
							subtasks: [
								{ id: '122231', title: 'Step out', isCompleted: true },
								{ id: '222234211112', title: 'Step in', isCompleted: true },
								{ id: '22223333214421', title: 'Step in', isCompleted: false },
							],
						},
					],
				},
			],
		},
	],
};
