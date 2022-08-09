import { ErrorMessage } from 'formik';
import { StyledInput } from './Input.styled';


const Input = ({ name, placeholder }: any) => {
	return (
		<>
			<ErrorMessage name={name} />
			<StyledInput name={name} />
		</>
	);
};

export default Input;
