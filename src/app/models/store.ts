import {ICategoryListState} from "./categoryList";
import {ICategoryState} from "./category";
import {RouterState} from "react-router-redux";

export interface IState {
  routing: RouterState;
  categoryList?: ICategoryListState;
  category?: ICategoryState;
}