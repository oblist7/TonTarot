import { Link } from 'react-router-dom';
import './App.css'

// Компонент для новой страницы
function NewPage() {
  return (
    <div>
      <h1 className="title-ZDk4WvD1">Задайте вопрос
        <span className="gradientPartOfTitle-ZDk4WvD1"> прорицателю</span>
      </h1>

      <div className="inputWrapper-XcCgjF8x">
        <div className="inputContainer-XcCgjF8x">
          <textarea className="input-XcCgjF8x"></textarea>
          <div className="placeholderWrapper-XcCgjF8x shown-XcCgjF8x">
            <div className="placeholderContainer-XcCgjF8x">
              <span className="placeholder-XcCgjF8x"></span>
                {/* <span>Что</span> <span>угрожает</span> <span>моему</span> <span>портфелю</span> <span>прямо</span> <span>сейчас?</span></span> */}
                <span className="placeholderSlash-XcCgjF8x"></span></div>
          </div>
          <div className="crossButtonWrapper-XcCgjF8x">
            <button type="button" className="crossButton-XcCgjF8x">
              <span role="img" className="crossButtonIcon-XcCgjF8x" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                <path fill="currentColor" d="M21.35 7.35a.5.5 0 0 0-.7-.7L14 13.29 7.35 6.65a.5.5 0 1 0-.7.7L13.29 14l-6.64 6.65a.5.5 0 0 0 .7.7L14 14.71l6.65 6.64a.5.5 0 0 0 .7-.7L14.71 14l6.64-6.65z"></path></svg></span>
            </button>
          </div>
        </div>
      <div className="gradientBorder-XcCgjF8x"></div><div className="textLengthWrapper-XcCgjF8x"><span className="textLength-XcCgjF8x">0/140</span></div></div>

      <div className="gradientBorder-XcCgjF8x"></div>
      <button>
        <span className="content-FujgyDpN">Получить предсказание</span>
      </button>

      <Link to="/">Вернуться назад</Link>
    </div>
  );
}

export default NewPage
