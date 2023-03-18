import React from "react";
import footerLogo from "../img/logo-green-2x.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={footerLogo} alt="" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="h" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="j" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="j" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="j" className="footer__link">
                  Pricacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="j" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="f" className="footer__link">
              Shera Kosimi
            </a>{" "}
            Copyright &copy; by Shera Kosimi for his personal purposes. You are
            100% allowed to use this webpage for both personal and commercial
            use, but NOT to claim it as your own design. A credit to the
            original author, Shera Kosimi, is of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
}
