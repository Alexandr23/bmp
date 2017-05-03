import {ICatalogState} from "./catalog";
import {RouterState} from "react-router-redux";

export interface IStore {
  routing: RouterState;
  catalog?: ICatalogState;
}