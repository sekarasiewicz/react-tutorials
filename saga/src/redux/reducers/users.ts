import * as type from "../actionTypes";
import { UserType } from '../../types'

export const initialState: {
  users: UserType[]
  loading: boolean
  error: string | null
} = {
  users: [],
  loading: false,
  error: null
};

export const users = (state = initialState, action: {payload: UserType[], type: string, message: string}) => {
  switch (action.type) {
    case type.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state;
  }
};
