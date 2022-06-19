import { Card } from './Card'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions'
import { RootReducer } from '../redux/reducers'

type UserProps = {}

export const User: React.FC<UserProps> = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootReducer) => state.users.users)
  const loading = useSelector((state: RootReducer) => state.users.loading)
  const error = useSelector((state: RootReducer) => state.users.error)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  console.log('users', users)
  return <>
    {loading && <p>Loading...</p>}
    {users?.length !== 0 ?
      users?.map((user) => (<Card key={user.id} user={user} />)) :
      <p>No users</p>
    }
    {error && !loading && <p>{error}</p>}
  </>
}
