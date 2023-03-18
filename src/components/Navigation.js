export default function App() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">
          <span class="navigation__icon-span">&nbsp;</span>
          <span class="navigation__icon-span">&nbsp;</span>
          <span class="navigation__icon-span">&nbsp;</span>
          <span class="navigation__icon-span">&nbsp;</span>
          <span class="navigation__icon-span">&nbsp;</span>
          <span class="navigation__icon-span">&nbsp;</span>
        </span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#section-about" className="navigation__link">
              <span>01</span> About Natous
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-features" className="navigation__link">
              <span>02</span> Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="section-tours" className="navigation__link">
              <span>03</span> Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-stories" className="navigation__link">
              <span>04</span> Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-book" className="navigation__link">
              <span>05</span> Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
