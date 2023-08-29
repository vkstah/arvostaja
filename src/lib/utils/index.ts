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

export const calculateCompoundedAmount = (
	initialInvestment: number,
	annualInterestRate: number,
	compoundFrequency: number,
	yearsTotal: number,
	monthlyContribution: number
) => {
	const monthsTotal = yearsTotal * 12;
	const initialPeriod = {
		investedAmount: initialInvestment,
		totalAmount: initialInvestment,
		generatedAmount: 0
	};
	const periods = [initialPeriod];
	const interest = annualInterestRate / 100 / compoundFrequency;

	for (let i = 1; i <= monthsTotal; i++) {
		const previousPeriod = periods[i - 1];
		const investedAmount = previousPeriod.investedAmount + monthlyContribution;
		const totalAmount = (previousPeriod.totalAmount + monthlyContribution) * (1 + interest);
		const generatedAmount = totalAmount - investedAmount;

		periods.push({ investedAmount, totalAmount, generatedAmount });
	}

	return periods;
};
