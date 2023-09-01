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
	published: boolean;
	slug: string;
	url: string;
	datePublished: string;
	thumbnailCloudinaryId: string;
	excerpt?: string;
	dateLastUpdated: string;
};

export type Stock = {
	title: string;
	weight: number;
	profit: number;
	acquisitionPrice: number;
	color: string;
};
