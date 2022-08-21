import { styled } from '../../theme/theme';
import { Field } from 'formik';

export const StyledBoxSection = styled.div`
	margin-bottom: 24px;
`;
export const StyledTextArea = styled.textarea`
	${({ theme }) => theme.text.large}
	border: 1px solid ${({ theme }) => theme.borderGray};
	border-radius: 4px;
	padding: 8px 16px;
	width: 100%;
`;
export const StyledLabel = styled.label`
	${({ theme }) => theme.text.medium}
	display: block;
	margin-bottom: 8px;
	color: ${({ theme }) => theme.textGrey};
`;
export const StyledColumnInputBox = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	margin-bottom: 12px;
`;
export const StyledField = styled(Field)`
	${({ theme }) => theme.text.large}
	width: 100%;
	background: ${({ theme }) => theme.backgroundMain};
	border: 1px solid ${({ theme }) => theme.borderGray};
	box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
	border-radius: 4px;
	color: ${({ theme }) => theme.mainColor};
	height: 40px;
	padding: 0 16px;
`;
