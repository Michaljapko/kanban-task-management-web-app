import { StyledBack, StyledBox } from './PopUp.styled';
import Button from '../Button';
const PopUp = () => {
	return (
		<StyledBack>
			<StyledBox>
				<h2>Delete this board?</h2>
				<p>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
				<Button>Delete</Button>
				<Button>Cancel</Button>
			</StyledBox>
		</StyledBack>
	);
};
export default PopUp;
