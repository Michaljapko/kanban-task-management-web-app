import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';

const LandingPage: React.FC = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<p>This board is empty. Create a new column to get started.</p>
			<button>Add New Column </button>
		</>
	);
};

export default LandingPage;
