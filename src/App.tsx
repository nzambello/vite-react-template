import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://vitejs.dev" target="_blank">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img alt="React logo" className="logo react" src="/react.svg" />
        </a>
      </header>
      <main>
        <h1>Hello Vite + React!</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>Increment</button>
          <p>Count is: {count}</p>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </main>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
