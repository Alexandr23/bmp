/* Admin */
import {ICategoryState, ICategoryListState} from "../modules/Admin/models/category";
import {ICatalogState, ICatalogListState} from "../modules/Admin/models/catalog";
import {IProductState, IProductListState} from "../modules/Admin/models/product";

/* Store */
import {ICatalogState as IStoreCatalogState} from "../modules/Store/models/catalog";
import {RouterState} from "react-router-redux";


export interface IState {
  store: {
    catalog?: IStoreCatalogState;
  },
  admin: {
    routing: RouterState;
    categoryList?: ICategoryListState;
    category?: ICategoryState;
    catalog?: ICatalogState;
    catalogList?: ICatalogListState;
    product?: IProductState;
    productList?: IProductListState;
  }
}