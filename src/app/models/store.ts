import {ICatalogState} from "./catalog";
import {RouterState} from "react-router-redux";

export interface IState {
  routing: RouterState;
  catalog?: ICatalogState;
}