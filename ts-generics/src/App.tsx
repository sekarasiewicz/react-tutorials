import React, {useState} from 'react';
import './App.css';

const last = <T,>(arr: T[]): T => {
 return arr[arr.length -1]
}

const l = last<number>([1, 2, 3])
const l2 = last<string>(['a', 'b', 'c'])

// With default type
const makeArr = <X, Y = number,>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

const v = makeArr(5, 6)
const v2 = makeArr('a', 'b')
const v3 = makeArr<string | number, number>('a', 1)
const v4 = makeArr<string | number>('a', 1)

const makeFullName = <T extends {firstName: string, lastName: string},>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

const n = makeFullName({
  firstName: 'seba',
  lastName: 'kar',
  age: 15
})

interface Tab<T,> {
  id: number
  position: number
  data: T
}

const NumberTab: Tab<number> = {id: 1, position: 2, data: 1}

type Panel<T,> = {
  something: T
}

const NumberPanel: Panel<number> = {something: 1}

type HelloWorldProps = {
  name: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({name}) => {
  const [state, setState] = useState<{name: string | null}>({name: ''})
  // state.name
  return <div>{name}</div>
}

type FormProps<T> = {
  values: T
  children: (values: T) => JSX.Element
}

const Form = <T extends {},>({values, children}: FormProps<T>) => {
  return (
    children(values)
  )
}

function App() {
  return <Form<{firstName: string | null}> values={{ firstName: 'BoB'}}>{(values) => <div>{values.firstName}</div>}</Form>
}

export default App;
