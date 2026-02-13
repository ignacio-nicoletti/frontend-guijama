export type Filter = {
  type: "select" | "input";
  selectOptions?: { value: string; label: string }[] | boolean;
  by: string;
  display: string;
};

export type FilterSellSearch = {
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
