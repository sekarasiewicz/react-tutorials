import { call, put, takeEvery } from 'redux-saga/effects'
import { UserType } from '../../types'

const apiURL = 'https://jsonplaceholder.typicode.com/users'

const getApi = (): Promise<UserType[]> => {
  return fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).catch((error) => {throw  error})
}

function* fetchUsers(): Generator {
  try {
    const users = yield call(getApi)
    yield put({type: 'GET_USERS_SUCCESS', payload: users})
  } catch (e: any) {
    yield put({type: 'GET_USERS_FAILED', message: e.message})
  }
}

export function* userSaga() {
  yield takeEvery('GET_USERS_REQUEST', fetchUsers)
}
