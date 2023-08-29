export type InputType =
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'reset'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'
	| 'search';

export type Period = {
	investedAmount: number;
	totalAmount: number;
	generatedAmount: number;
};

export type Article = {
	title: string;
	url: string;
	datetime: string;
	thumbnail: string;
	excerpt?: string;
};
