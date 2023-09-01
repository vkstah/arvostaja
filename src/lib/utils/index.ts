import dayjs from 'dayjs';
import 'dayjs/locale/fi';

/**
 * Separate thousands in a number. For example, input of 5000 will give you 5 000.
 *
 * @param num 			The number to apply the function to. Can be a string or a number.
 */
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

/**
 * Calculate compounded amount over a period of time using several adjustable parameters.
 *
 * @param initialInvestment				Initial investment.
 * @param annualInterestRate			Annual interest rate as an integer.
 * @param compoundFrequency				Compound frequency, how often should we apply the compounding effect? Defaults to 12 (every month).
 * @param yearsTotal							Total investment span in years.
 * @param monthlyContribution			Amount contributed each month.
 */
export const calculateCompoundedAmount = (
	initialInvestment: number,
	annualInterestRate: number,
	compoundFrequency = 12,
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

/**
 * Format a date for displayment.
 *
 * @see https://day.js.org/docs/en/display/format
 */
export function formatDate(date: string) {
	const dayjsObject = dayjs(date).locale('fi');
	if (!dayjsObject) throw new Error('Failed to instantiate a proper dayjs object');
	/**
	 * Format: 22. heinäkuuta, 2023
	 * Use square brackets to escape certain characters
	 */
	return dayjsObject.format('D. MMMM[ta], YYYY');
}

export const countWords = (str: string) => {
	const words = str.split(' ');

	let count = 0;
	for (let i = 0; i < words.length; i++) {
		if (words[i] !== '') {
			count++;
		}
	}
	return count;
};
