import React from 'react';

const Footer = (props) => {
  const { socials } = props;

  return (
    <footer>
      <div className="footer-container">
        <div className="social-links">
          {socials.map((el, i) => (
            <a href={`${el}.html`} key={i} >
              <i className={`fab fa-${el}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
