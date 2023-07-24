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

export const calculateTotalCompoundedValue = (
	startingAmount: number,
	savingTimeYears: number,
	monthlyContributions: number,
	profitPercentagePerYear: number
): number => {
	const totalMonths = savingTimeYears * 12;
	let totalValue = startingAmount;

	for (let i = 1; i <= totalMonths; i++) {
		const monthlyProfit =
			(totalValue + monthlyContributions) * (profitPercentagePerYear / (12 * 100));
		totalValue = totalValue + monthlyContributions + monthlyProfit;
	}

	return totalValue;
};
