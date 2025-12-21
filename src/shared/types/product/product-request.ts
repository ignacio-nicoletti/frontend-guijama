export type ProductCreateRequest = {
	description: string;
	brandId: string;
	categoryId: string;
	code: string;
	cost: number;
	profit: number;
	iva: number;
	calculatedCost: number;
	calculatedPrice: number;
};

export type ProductEditRequest = ProductCreateRequest;
