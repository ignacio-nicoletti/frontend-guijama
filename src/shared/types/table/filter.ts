export type Filter = {
	type: 'select' | 'input';
	selectOptions?: { value: string; label: string }[] | boolean;
	by: string;
	display: string;
};

export type FilterProductSearch = {
	brandId?: string;
	categoryId?: string;
};