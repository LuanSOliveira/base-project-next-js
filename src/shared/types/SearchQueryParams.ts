export type SortDirection = 'asc' | 'desc' | 'DESC' | 'ASC';

export interface SearchQueryParams {
  page?: number;
  year?: string;
  nameOrCode?: string;
  structuralAxis?: string;
  quarterOfTheYear?: string;
  quarter?: string;
  perPage?: number;
  sort?: string;
  relations?: string;
  sortDir?: SortDirection;
  filter?: string;
  field?: string;
  selectFields?: string;
  title?: string;
}
