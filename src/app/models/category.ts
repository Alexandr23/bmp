export interface IPagination {
  page: number;
  total: number;
  perPage: number;
}

export interface ICategory {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrk: string;
}

export interface ICategoryAction {
  type: string;
}

export interface ICategoryState {
  list: ICategory[];
  pagination: IPagination;
}