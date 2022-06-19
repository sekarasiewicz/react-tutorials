import * as type from "../actionTypes";
import { UserType } from '../../types'

export const getUsers = (users: UserType[]) => {
  return {
    type: type.GET_USERS,
    payload: users,
  };
};
