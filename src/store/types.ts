export enum ActionTypeKeys {
  LOADING = "loading",
  GET_CATEGORIES = "get_categories",
  SEARCH_CATS = "search_cats",
  SEARCH_CLEAR = "search_clear",
  Error = "error",
}

export interface ICategory {
  id: string;
  name: string;
}

export const initialCategory: ICategory = {
  id: "",
  name: "",
};

export interface IContent {
  breeds: [];
  categories: ICategory[];
  height: number;
  id: string;
  url: string;
  width: number;
}

export const initialContent: IContent = {
  breeds: [],
  categories: [initialCategory],
  height: 0,
  id: "",
  url: "",
  width: 0,
};

export interface ActionTypes {
  type: ActionTypeKeys;
  payload?: ICategory[] | IContent[] | string;
}
