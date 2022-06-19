import * as type from "../actionTypes";
import { UserType } from '../../types'

export const initialState: {
  users: UserType[]
} = {
  users: [],
};

export const users = (state = initialState, action: {payload: UserType[], type: string}) => {
  switch (action.type) {
    case type.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
