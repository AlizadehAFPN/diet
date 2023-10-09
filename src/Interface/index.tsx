import {authState} from '../redux/authSlice';
import {SearchState} from '../redux/search-slice';

export type NavigatorParamList = {
  navigate(arg0: string): unknown;
  search: undefined;
  filter: undefined;
};

export interface loginInterface {
  username: string;
  password: string;
}

export interface storeInterface {
  auth: authState;
  search: SearchState;
}
