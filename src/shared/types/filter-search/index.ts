export type FilterProductSearch = {
	brandId?: string;
	categoryId?: string;
};

export type FilterListPriceSearch = {
	name?: string;
};

export type { FilterClientSearch } from './client/client';
export type { FilterRemittanceSearch } from './remittance';
export type {
	FilterStockSearch,
	FilterStockTransferSearch,
	IncomeFilterSearch,
	OutcomeFilterSearch,
} from './stock';
export type { FilterSupplierSearch } from './supplier/supplier';
