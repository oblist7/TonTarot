import { useState } from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NewPage from './NewPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route
          path="/"
          element={
            <>
              <div>
                <h1>Taro 🃏</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Откройте тайны судьбы с помощью бота Таро. Задайте вопрос и получите мудрые ответы карт на ваши жизненные ситуации.
                  </p>
                  {/* Кнопка для открытия новой страницы */}
                  <Link to="/new-page">
                    <button>Открыть новую страницу</button>
                  </Link>
                </div>
                <p className="read-the-docs">tg: @Syrym</p>
              </div>
            </>
          }
        />
        {/* Новая страница */}
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </Router>
  )
}

export default App
