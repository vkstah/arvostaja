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
	stocks?: Stock[];
};

export type Stock = 'admicom' | 'tokmanni';

export type Holding = {
	title: string;
	weight: number;
	acquisitionPrice: number;
	profit: number;
	color: string;
};
