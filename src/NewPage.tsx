import { Link } from 'react-router-dom';
import './App.css'

// Компонент для новой страницы
function NewPage() {
  return (
    <div>
      <h2>New Page</h2>
      <p>Здесь будет отображаться новый контент.</p>
      <Link to="/">Вернуться назад</Link>
    </div>
  );
}

export default NewPage
