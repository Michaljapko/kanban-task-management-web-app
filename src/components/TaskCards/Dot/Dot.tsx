import { StyledDot } from './Dot.styled';
interface DotType {
  colorIndex: number;
}
const Dot = ({ colorIndex }: DotType) => {
  return <StyledDot colorIndex={colorIndex} />;
};
export default Dot;
