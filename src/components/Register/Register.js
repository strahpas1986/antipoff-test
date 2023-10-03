import './Register.css'

function Register() {
  return (
    <main className="register">
      <div className="register__wrapper">
        <h2 className="register__title">Регистрация</h2>
        <label className="form-input__wrapper">
          Имя
          <input
            className="form-input"
            type="text"
            name="name"
            form="register"
            required
            minLength="2"
            maxLength="30"
            id="name-input"
          />
          <span className="form__input-error"></span>
        </label>
        <label className="form-input__wrapper">
          Электронная почта
          <input
            className="form-input"
            type="email"
            name="email"
            form="register"
            required
            id="email-input"
          />
          <span className="form__input-error"></span>
        </label>
        <label className="form-input__wrapper">
          Пароль
          <input
            className="form-input"
            type="password"
            name="password"
            form="register"
            required
            minLength="6"
            maxLength="30"
            id="password-input"
          />
        </label>
        <label className="form-input__wrapper">
          Подтвердите пароль
          <input
            className="form-input"
            type="password"
            name="password-confirm"
            form="register"
            required
            minLength="6"
            maxLength="30"
            id="password-input-confirm"
          />
        </label>
        <button
          type="submit"
          form="register"
          className="form__btn-submit"
        >
          Зарегистрироваться
        </button>
      </div>

    </main>
  )
}

export default Register;
