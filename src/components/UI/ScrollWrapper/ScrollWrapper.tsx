import { useState } from 'react';
import { StyledScrollWrapper } from './ScrollWrapper.styled';
import { measuredRefType, ScrollWrapperProps } from './ScrollWrapper.types';

const ScrollWrapper = ({ children }: ScrollWrapperProps) => {
	const [currentHeight, setCurrentHeight] = useState(0);

	const measuredRef = (node: measuredRefType) => {
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
