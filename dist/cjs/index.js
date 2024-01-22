'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function Button() {
  return /*#__PURE__*/React.createElement("button", null, "Click me");
}

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

exports.Button = Button;
exports.Footer = Footer;
exports.Header = Header;
//# sourceMappingURL=index.js.map
