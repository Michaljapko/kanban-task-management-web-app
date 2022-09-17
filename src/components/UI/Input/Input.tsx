import { StyledInput, StyledError, StyledWrapper } from './Input.styled';
import { FieldProps } from 'formik';
import { Field } from 'formik';
import { InputProps } from './Input.types';

const Input = ({ name, placeholder, as }: InputProps) => {
	return (
		<StyledWrapper>
			<Field name={name}>
				{({ field, form, meta }: FieldProps) => (
					<>
						<StyledInput
							id={name}
							as={as}
							type='text'
							{...field}
							placeholder={placeholder}
							error={meta.error}
						/>
						{meta.touched && meta.error && (
							<StyledError id={name}>{meta.error}</StyledError>
						)}
					</>
				)}
			</Field>
		</StyledWrapper>
	);
};

export default Input;
