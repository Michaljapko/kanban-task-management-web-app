import { useState } from 'react';
import { StyledScrollWrapper } from './ScrollWrapper.styled';

const ScrollWrapper = ({
	children,
}: {
	children: false | JSX.Element | JSX.Element[];
}) => {
	const [currentHeight, setCurrentHeight] = useState(0);

	const measuredRef = (
		node: ((instance: HTMLDivElement | null) => void) & HTMLDivElement
	) => {
		if (node !== null) {
			setCurrentHeight(node.getBoundingClientRect().height);
		}
	};

	return (
		<StyledScrollWrapper ref={measuredRef} currentHeight={currentHeight}>
			{children}
		</StyledScrollWrapper>
	);
};

export default ScrollWrapper;
