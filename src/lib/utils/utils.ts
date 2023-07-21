export const separateThousands = (num: number | string): string => {
	// Convert the number to a string
	const numStr = num.toString();

	// Split the string into parts before and after the decimal point (if any)
	const [wholePart, decimalPart] = numStr.split('.');

	// Add spaces for thousands separator
	let formattedNum = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

	// If there was a decimal part, add it back to the formatted number
	if (decimalPart) {
		formattedNum += '.' + decimalPart;
	}

	return formattedNum;
};
