import './App.css'
import {useMemo, useState} from "react"
import Child from "./components/Child";

function App() {
  const [i, setI] = useState(0)

  const onClickHandler = () => {
    setI(i + 1)
  }

  const memoChild = useMemo(() => <Child />, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Use memo</h3>
        <h2>i: {i}</h2>
        <button onClick={onClickHandler}>Increment I</button>
        <h3>normal render</h3>
        <Child />
        <h3>memo render</h3>
        {memoChild}
      </header>
    </div>
  )
}

export default App
