import './TeamsListCard.css';

function TeamsListCards() {
  return (
    <li className="teams-card">
      <img className="teams-card__image" src="#" alt="foto"/>
      <p className="teams-card__title">Артур Королёв</p>
      <button className="teams-card__like">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M3.85 9.6021e-07C1.72375 9.6021e-07 0 1.72173 0 3.84548C0 7.69096 4.55 11.1869 7 12C9.45 11.1869 14 7.69096 14 3.84548C14 1.72173 12.2762 9.6021e-07 10.15 9.6021e-07C8.848 9.6021e-07 7.6965 0.645692 7 1.63398C6.64499 1.1289 6.17336 0.71669 5.62504 0.432263C5.07672 0.147837 4.46785 -0.000435366 3.85 9.6021e-07Z" fill="#512689"/>
        </svg>
      </button>
    </li>
  )
}

export default TeamsListCards;
