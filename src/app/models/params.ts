import {IPagination} from "./pagination";


export interface IParams {
  pagination?: IPagination;
  filter?: Object;
  sort?: string[];
}