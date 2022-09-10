export const getSequenceArr = (sequenceLong: number, maxNumber: number) => {
	const sequenceArr = [];
	let number = 0;
	do {
		if (number >= maxNumber) {
			number = 0;
		}
		sequenceArr.push(number);
		number++;
	} while (sequenceArr.length < sequenceLong);
	return sequenceArr;
};
