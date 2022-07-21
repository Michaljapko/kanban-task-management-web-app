import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Button from '../Button';
import addMobile from '../../assets/icon-add-task-mobile.svg';

import { StyledWrapper } from './LandingPage.style';

const LandingPage: React.FC = () => {
	return (
		<>
			<Header />
			<StyledWrapper>
				{/* <Sidebar /> */}

				<p>This board is empty. Create a new column to get started.</p>
				<Button icon='plus'>Add New Column</Button>
			</StyledWrapper>
		</>
	);
};

export default LandingPage;
