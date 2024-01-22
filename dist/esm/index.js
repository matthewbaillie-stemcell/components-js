import React from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "button{border-radius:.75rem;border-width:1px;padding:.25rem 1rem;text-align:center;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}button:hover{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);filter:brightness(1.25)}button:disabled{background-color:#737373;border-color:#737373;color:#e5e5e5;cursor:not-allowed}";
styleInject(css_248z$2);

function Button() {
  return /*#__PURE__*/React.createElement("button", null, "Click me");
}

var css_248z$1 = ".storybook-header{align-items:center;border-bottom:1px solid rgba(0,0,0,.1);display:flex;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;justify-content:space-between;padding:15px 20px}.storybook-header h1,.storybook-header svg{display:inline-block;vertical-align:top}.storybook-header h1{font-size:20px;font-weight:700;line-height:1;margin:6px 0 6px 10px}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{color:#333;font-size:14px;margin-right:10px}";
styleInject(css_248z$1);

// import Logo from "../stories/assets/stemcell_logo.png";

function Header({
  user,
  onLogin,
  onLogout,
  onCreateAccount
}) {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "storybook-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: Logo
  })), /*#__PURE__*/React.createElement("div", null, user ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "welcome"
  }, "Welcome, ", /*#__PURE__*/React.createElement("b", null, user.name), "!"), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    onClick: onLogout,
    label: "Log out"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    onClick: onLogin,
    label: "Log in"
  }), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    size: "small",
    onClick: onCreateAccount,
    label: "Sign up"
  })))));
}
Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired
};
Header.defaultProps = {
  user: null
};

var css_248z = ".sb-show-main.sb-main-centered #storybook-root{box-sizing:border-box;margin:auto;max-height:100%;padding:0;width:100%!important}.footer{background:#f7f7f7;width:100%}.footer:before{content:\"\";display:block;height:1rem;margin-top:-1.1rem;position:absolute;width:100%}.copyright{background:0 0;box-sizing:border-box;font-size:15px;line-height:1.7rem;line-height:1.42857143;margin:0 auto;padding:2rem 0;text-align:left;width:1240px;width:700px}.copyright,.copyright ul.footer-bottom-links li{color:#53585a;font-family:Lato,Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400}.copyright ul.footer-bottom-links li{-webkit-text-size-adjust:100%;--swiper-theme-color:#007aff;--swiper-navigation-size:44px;display:inline-block;font-size:1.4rem;line-height:1rem;list-style-type:none;margin:0}.copyright ul.footer-bottom-links{color:#53585a;float:right;line-height:1.7rem;list-style-type:none;margin:0;padding:0;text-align:left}.copyright ul.footer-bottom-links li a{color:#ef8200;font-size:15px}.copyright ul.footer-bottom-links li a,.country-name{-webkit-text-size-adjust:100%;--swiper-theme-color:#007aff;--swiper-navigation-size:44px;font-family:Lato,Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.7rem;list-style-type:none;text-decoration:none;transition:all .3s ease}.country-name{color:#53585a;font-size:10px}";
styleInject(css_248z);

/**
 * Primary UI component for user interaction
 */

function Footer({
  label
}) {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "copyright"
  }, /*#__PURE__*/React.createElement("span", null, " ", label), /*#__PURE__*/React.createElement("ul", {
    className: "footer-bottom-links"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/privacy-policy"
  }, "Privacy | ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/terms-and-conditions-general"
  }, "Terms & Conditions |", " ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "country-name",
    href: "/locale"
  }, "Canada")))));
}
Footer.propTypes = {
  label: PropTypes.string.isRequired
};
Footer.defaultProps = {};

export { Button, Footer, Header };
//# sourceMappingURL=index.js.map
