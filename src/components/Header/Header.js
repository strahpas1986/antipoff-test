import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">Наша команда</h1>
        <p className="header__subtitle">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </div>
      <button className="header__button">Выход</button>
      {/* <button className="header__button header__button_back">Назад</button> */}
    </header>
  )
}

export default Header;
