import styled from 'styled-components';

export const StyledHeading = styled.h2`
	${({ theme }) => theme.textHeading.large}
	color:   ${({ theme }) => theme.mainColor}
`;

export const StyledLabel = styled.label`
	display: block;
	margin-bottom: 8px;
	${({ theme }) =>  theme.text.medium}
	color: #828FA3;
`;
export const StyledColumnInputBox = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 12px;
`;
export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;
