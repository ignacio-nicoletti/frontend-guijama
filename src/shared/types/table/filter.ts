export type Filter = {
  type: "select" | "input";
  selectOptions?: { value: string; label: string }[] | boolean;
  by: string;
  display: string;
};

export type FilterProductSearch = {
  brandId?: string;
  categoryId?: string;
  code?: string;
  title?: string;
};

export type FilterClientSearch = {
  firstName?: string;
  lastName?: string;
};

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
