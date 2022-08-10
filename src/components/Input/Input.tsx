import { FieldProps } from 'formik';
import { StyledInput, StyledError, StyledWrapper } from './Input.styled';
import { Field } from 'formik';

const Input = ({ name, placeholder }: any) => {
	return (
		<StyledWrapper>
			<Field name={name}>
				{({ field, form, meta }: FieldProps) => (
					<>
						<StyledInput type='text' {...field} placeholder={placeholder} error={meta.error} />
						{meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
					</>
				)}
			</Field>
		</StyledWrapper>
	);
};

export default Input;
