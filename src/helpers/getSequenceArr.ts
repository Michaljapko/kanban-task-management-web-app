export const getSequenceArr = (sequenceLong: number, maxNumber: number) => {
	const sequenceArr = [];
	let number = 1;
	do {
		if (number > maxNumber) number = 1;
		sequenceArr.push(number);
		number++;
	} while (sequenceArr.length < sequenceLong);
	return sequenceArr;
};
