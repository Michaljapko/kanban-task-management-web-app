import styled from 'styled-components';

export const StyledBack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 16px;
	background: #00000038;
`;
export const StyledWrapper = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	margin-bottom: 3px;
	box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
	border-radius: 8px;
	padding: 16px 0px;
	background: #ffffff;
	font-size: 15px;
	color: #828fa3;
`;

export const StyledHead = styled.div`
	margin-bottom: 19px;
	padding: 0 24px;
	font-size: 12px;
	letter-spacing: 2.4px;
	text-transform: uppercase;
`;

export const StyledRadioBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	margin: 16px;
	width: 235px;
	height: 48px;
	border-radius: 6px;
	background: #f4f7fd;
`;
