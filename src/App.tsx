import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Tarot 🃏</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Откройте тайны судьбы с помощью бота Таро. Задайте вопрос и получите мудрые ответы карт на ваши жизненные ситуации.
        </p>
      </div>
      <p className="read-the-docs">
        tg: @Syrym
      </p>
    </>
  )
}

export default App
