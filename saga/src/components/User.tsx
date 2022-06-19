import { Card } from './Card'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions'
import { RootReducer } from '../redux/reducers'

type UserProps = {}

export const User: React.FC<UserProps> = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootReducer) => state.users.users)

  useEffect(() => {
    dispatch(getUsers([{
      id: 1,
      name: 'Leanna Graham',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi layered client-server neural-net'
      }
    }]))
  }, [])

  return <>{users.length !== 0 ? users?.map((user) => (<Card key={user.id} user={user} />)) : <p>No users</p>}</>
}
