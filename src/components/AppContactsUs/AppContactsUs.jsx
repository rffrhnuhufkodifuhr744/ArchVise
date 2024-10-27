import "./appContactsUs.css";

import React from "react";

const AppContactsUs = () => {
  return (
    <>
      <div className="contact-container">
        <img
          className="contact-image"
          src="/img/contact us.png"
          alt="Contact us"
        />
        <h1 className="contact-text">Контакти</h1>
      </div>
      <div className="arch_quest">
        <h3 className="have_qst">Є питання стосовно ArchVisStudio?</h3>
        <p>
          Якщо вам потрібна додаткова інформація щодо будь-якої функції
          планувальника простору Roomtodo, будь ласка, зв’яжіться з нами
          будь-яким із цих каналів.
        </p>
        <div className="contacts">
          <div className="office-block">
            <h4>ТОВ ArchVis Studio</h4>
            <p>Ukraine, Uzhorod</p>
            <p>ejjekrj</p>
          </div>
          <div className="office-block">
            <h4>Development office</h4>
            <p>04080, Ukraine, Kyiv, Kyrylivska 47a</p>
            <p>+38 093 566 10 80</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form action="/submit" method="POST">
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <div className="form-group recaptcha-container">
            {/* reCAPTCHA */}
            <div
              className="g-recaptcha"
              data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
            ></div>
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppContactsUs;
