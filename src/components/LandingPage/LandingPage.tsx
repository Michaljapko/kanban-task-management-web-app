import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';

import { StyledWrapper } from './LandingPage.style';

const LandingPage: React.FC = () => {
	return (
		<>
			<Header />
			<StyledWrapper>
				{/* <Sidebar /> */}
				<p>This board is empty. Create a new column to get started.</p>
				<button>Add New Column </button>
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
