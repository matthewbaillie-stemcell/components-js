'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

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

var css_248z$3 = ":root{--dse-body-text-color:#1d1f22;--dse-body-bg-color:#fff;--dse-btn-primary-color:#fff;--dse-btn-primary-bg:#5ece7b;--dse-btn-primary-bg-hover:#9ee2b0;--dse-btn-secondary-color:#fff;--dse-btn-secondary-bg:#1d1f22;--dse-form-color:#1d1f22;--dse-form-bg:#fff;--dse-form-error-color:#d12727;--dse-form-error-border:#d12727;--dse-form-border-focus-color:#5ece7b;--dse-body-font-size:1rem;--dse-body-font-weight:400;--dse-h1-font-size:1.375rem;--dse-h2-font-size:1.375rem;--dse-h3-font-size:1rem;--dse-h4-font-size:1.125rem;--dse-h5-font-size:0.75rem;--dse-h6-font-size:0.75rem;--dse-h1-font-weight:500;--dse-h2-font-weight:500;--dse-h3-font-weight:500;--dse-h4-font-weight:400;--dse-h5-font-weight:400;--dse-h6-font-weight:300}body{font-family:var(--dse-body-font-family,\"Playfair Display\",serif);font-size:var(--dse-body-font-size,.875rem);font-weight:var(--dse-body-font-weight,400)}.storybook-button{border:0;border-radius:6px;cursor:pointer;display:inline-block;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;line-height:1}.storybook-button--primary{background:#ef8200;color:#fff;font-size:14px;padding:5px 15px}.storybook-button--primary,.storybook-button--secondary{display:inline-block;font-family:Lato,Helvetica,Arial,sans-serif;font-weight:700;line-height:18px}.storybook-button--secondary{background:#fff;background-color:transparent;border:1px solid #ef8200;border-radius:0;color:#ef8200}.storybook-button--small{background:#ef8200;border-radius:0;color:#fff;display:inline-block;font-family:Lato,Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:18px;padding:10px 16px}.storybook-button--medium{font-family:Lato,Helvetica,Arial,sans-serif;font-size:14px;padding:11px 20px}.storybook-button--large{background:#ef8200;border-radius:0;color:#fff;display:inline-block;font-family:Lato,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:18px;padding:12px 24px}.storybook-header img{width:250px}";
styleInject(css_248z$3);

/**
 * Primary UI component for user interaction
 */

function Button({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
    style: backgroundColor && {
      backgroundColor
    }
  }, props), label);
}
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined
};

var css_248z$2 = ".storybook-header{align-items:center;border-bottom:1px solid rgba(0,0,0,.1);display:flex;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;justify-content:space-between;padding:15px 20px}.storybook-header h1,.storybook-header svg{display:inline-block;vertical-align:top}.storybook-header h1{font-size:20px;font-weight:700;line-height:1;margin:6px 0 6px 10px}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{color:#333;font-size:14px;margin-right:10px}";
styleInject(css_248z$2);

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAABWCAYAAACTtqJnAAAAAXNSR0IArs4c6QAAIABJREFUeJztnXm4HEW1wH+BsEREGERAEAkgi4iiPBGeohIFAggIFGBRbAmg4ANEfSguOGL7xIVFEHyAPjaDRbEUiwIiIioqIImyyk5YBFSWdAhLQiDk/XFqcvtOumftnnuT1O/75rtz53R31Z3b3afrrGOUNqcAR7Fkc4d39r0jPYlIJBKJFLPUSE8gEolEIpFOiAorEolEIosEzQprPnAssBVwfJNsLvA5YEvgjCbZC8AhwAcB1yR7GtDA1sBVTbLHgN2AjwI3NsnuAz4BbA/c3iSbCnwc2Bl4qEn223C8vYF/Nsl8mOP+wAwikUgkssgwtun3C72z3wnv/6K02RzYIfx+unf2NAClzVREcW0eZN/xzp6dkX0QeHuQfcU7e1GQfQpRIm8KssO9s1cHmQL+zZASPcA7OzXINKLAGuzpnX08yGYxpOzmAnt4Z2cFGcDFQfYMsK939hXgZqXNSsDpHX1LkUgkEhlxmldYz7T4/bnGG+/s/Ozv2e28s68xfPXybEb2MrIaa/B05v3ziMLJGzu73fyi4wNzmo6fPcaLQVk1+DeRSCQSWWQY0xQl+DywrXd2mtLmo8CvgeWC7Kkgu1dpsztwKUMK7wFgO+/s40qbQ4CfZsb4C7Arojy+DHwvI7sO2At4GTFBfikjuwSYBMwDzgIOzMjOQsyTywEXhOM3OB74BlADLgM+kpEdBZwGrA78CmhEBsYowUgkEhnlNCusBs8DKxXs8wKwYs7n84EXC2SvI0rpjTmy15CV1RtyZHPDvsvnyOYgJs1msybAS2GfpXNkL4axsqvLgSkspc3ywH8A7wLGA6sx9DfMQr6nR4HHgfu8s9MHMa9IpCqUNjXg3cB6yDm/MnIvGIs8kL6AXJfTkXP/bu/s03nHiizZ5N3soVhZQb5CAhjTQrYU+cqqMYeieSzbYh55SqzBCi1kRfOoDKXNOCTwZB9kxbdc6z2G7ZsC05DV7tXe2fsKtpsA/LD/2ZbOTt7Zp/IESpsvAfsOaB5PeWd36nRjpc0fKT6fm3nUO7tbb9PqHaXN6sC1yLXXCb/zzn6hwikBoLRZDtgW+CTwYWDjHo7xAPBHxBJytXd2Tgf7/BCY0O1YPTLNO3tIJxsqbTYCLioQd3Ve9kububzgnf1wyePthgTW5fGsd/bosN154bPp3tmk6RhfBTaCfEVxKXA9sAsSpZflHMTEZ5BIvAavA/8L3INEC26ekb0CnIqsGI5g+Mn7EnAiMBNZ5Y3PyNIgexU4GlmJNHgKOAkYh5gRswr2YeBHiNnviwxXbHcg5sr1EJNikaIsBaXNssjf/DXgzT0epgZsF14nKm0memevy9luJWCzHseoklYPHWsxuDmv3OX276b1g1uWzZQ2m3tn/9blGP2yD0Nm7U54tKJ5AAtuhp8D9mMosKpXNgyvg4FUaXOod/aSNvusy+DOp5ldbDuO4nl1e172S6u5PF/BeBszpLBWQO65sxCL3OOZ7Roun/lKm3O9s/+ABQ9lSdhvoRv2b7yze4UNf4Iopy2CbIp39uAgOx/4O7B+kJ3snf1SkP0cWdo3btB17+wPgswDjzCkRA73zp4fZNcA92fmsp939poguwn4U0b2Se/stCC7D1GyIIrzY5kIwieBHwfZi8DHvbPPBdks4DgqQmmzMXAh3d1QOuHhko8XKYdJwKAV1qQBj5eL0mYDxDe9R0VD1IC3VnTsSIV4Z79HiFtQ2lyBrLrX8c7mKfzXEJ00GVFSIClIY5GFz3LNUYK3ZQaaD9yVkd2Rkb2CrKYa3JmRzWL4TfX2jOxfwL/yjgk8iKy4Ftqvabv5Tb/flnk/s6Gsco7xRENZ5chKRWmzJXAz5SurV6n4KTnSM/sGU9hAUNq8lxFeUSttllPafB95eK1KWTV4tv0mkUWcqUgE+EFKm4ZumoysyH4PC4e17620eTOA0mZtJDG3wQFKmzcF2SZI4m6DySGYAKXNVgw3CX5aaTM2yHZkuNnvUKVNw/5+AMN9T5/NvP+vzPsxjd/DvkdkZKsobfYOsqWAQzOyjYKfB6XNMojpsnTCyurXVLPUf8g7O6+C40b6ZxXEjD4oDhjgWAuhtHkXcoP5MrDMAIaMCmvxZy5ilVoH+HjQJZsgPrc5sLBJcDzwoNLmTkTpZJ3O7wmye5Ck4XEZ2QTgIaXNdKRKRva4ewLvV9o8gSQUZzkMmBACC7Zqkh2rtPkkskx8X5PsFKXNvki037uaZBcpbT4PvAV4R+bzMcBvlDY3A2sjX0qpBEV4EZ35Pl5HVqYPIjltryHfdw2Z90YsHOV4P5HRzEEMmacrI5xngwpWyRt/IpKQ362f6jUkBeYhxEc9C3EP1IBVkRVjrWDfGDW4ZPAz4HBkQdEwG55PSHnKCzqoMTygIstqDA9+yLJWeOUxnuErqywbFXwO4vguYosWsv8s+HxppERUVRyGKPZWPAz8ALjEO5sWbRRWrB9BAl/2BtZALvYi/oYsn3thVeCEAtlshq9wu6XXJ+MrgSv6GLeZF0s81qvkryomKm3WLIqKLJEdKb4O59I60KUvggXDkp8yksc/wvbXAre0i/ZT2qyHnPd7IlV2GuP0q7DOZrgfvF/+1X6TSLd4Z29V2tyLBGq8gtwvb2rI8xTWPUipo20ZvkIBCa+ehpgK39Yk+1PYdw/kBpjleiQiZC8WDhW+CllhaIaHe7+O1P57FblhZ+c6F0ksHgfszvCw3peQp7/VgeZw0ZnIE/AGFCvlnggmyKPbbPZ/wBFNFTdyCRf2dcB1SpsvIlGChZFJwXd3XscTzqC0GU+xwprrne3puH1y+wiN2wkXk7/CWQox1X0vR1YmrcyBP6f3B5eWKG12RhL1O1FWU4HvAld6Z1/vdIyQdzgdOE9psyYSPXwEwyvr9MKfRvH5FBnOz5BzZ1ngRO/s/FBmbyEf1u3A+7yzn0WW59ngieuBLYPsfQx/4nHe2Q97Zw9FVj4vZ2Sneme3CxGGWyOJgg2+7p3dxTs7iaGahQ0O887u7Z3dF4kUybKXd3Y/76wCPt8k29Y7e5B39hMML+A7F9jKO/tp7+w2DK/GUQYfZqh+Yh6/AD7TibJqxjs7zzt7rXf2lp5nFymTc1vIKlEWDYKPuchX9hCSu1TFuJsgha3b+atSJBR9S+/s5d0oq2a8s095Z48B1uvluoksslyABNcBTMkKmhXWtd7ZubCg7t8NGdnVjZPPO/ssEgXX4BeNN97ZR8lEDZKp0O6dvZPhUW6/zMh+z/AowV9k3l+Zef86cE3Bdk833dSzsoe8s/cXyMrg423kR4fIy8iiz8OEqKUcNlTaNPtqy0RTbPI7h6ELvTSUNm9ELBqtEvJBrC//4Z09p8xz3Tsb634uHvwSycnNe/g4leD/9c4+gQTzfNU7+0h232aFta3SZmlY4EPJms0mNiL6QqmVLbOyxhulzVrApgWydzLcl7VDRvZBhl8Q2RXXxMz7pRDzWIMdM+9XU9pkAzSyx3hHsI/n7VcGrXxXd3lnHyx5vMjIck4L2UEVjntgweevI6aUKvgmEq3ViuuAj2ZuMJHIMLyzZ3tnP++dnZ0j+7x39vTM7yeGHK5h+zb7sN4P3Kq0+R1ys98wI9sBuFFpMw0xSayRkR2otHkbcDfip8qWPzpaabMh4sMyDLd/f19p837EPt1sl/8/pc02yBNjs7/gMqXNz5AowX2aZH9Q2kxBnNJ7Zj5fFmmZYhHfXNnlUJp9elmislr88Eh7mrxIub2VNp8LVorSCGa5omCja72zTzZs/SWOuSnQrpzTn5Fk/rblkyKRfsgLutic4XlUWbamOMru4xSbxXYt+HwMoBC/VrOZYyzFmfzLA58pkK1IcVTbqkjpmCoY10IWOzsvZnhnX1baXMjwXL8GKyIPS2WveIpWV9B6xdcP36Z1kMWTRGUVGRB5N9IXgVuRcOZm0iCbmyN7NsiaE1vnIiWeTkeSgScioew1YBnv7Fjv7HJhLjWkHtgExKzyfcSP9gILczfFZYruAJ7I+Xw+Ev5dhU381Ray0VjjL9I/Z7eQTSpzoGCq369A/CwZf3CJY26ClNJpxQFNFWQikcpoXmH9A4nu+afSZn1E0TRqAv4d2No7O1Np8x7gFoZWFX8GdvDOvqi0+RDwE6TK8lXATY1AjlYEJ+3M8HqUjFM7hIy/Bwmn3xnpjHxq8KmdzvAV1WTv7HmhusYUxEkNoqx29c5eFfxzVzDcN9Yvzc0vs6yrtNnWO3t9ieNFRhjv7FSlzd0M99k2mKC0WbdEn852wJoFsimdXGM9cAStK8Ff6J29oYU8EimVZoV1oXf2nwDe2YdDscKDg+ycRsFC7+ydSptGRXeAM72zLwbZn1m4+gRpwpqI43Y9pGju6ogPahwSKjuHIYX1WHjdA9xfq9vXkZD724H/aRwzxOefxJDCeq6Ra+GdfU1p8yOGFNZ93tmrgmyO0uYMylVYdyO5a0WcpbTZwjs7o8U2kUWPc4CTC2STkICFMmiVe1W6OTBU09irxSbzkC4EkcjAaFZYC54Uw+olq3jelZGNZahCxT+Q/I9hpAmrI76rbZHKE2v3OMdZacI0JA/smlp9WOFbkPIuf0WaIq6stFnLO/tk898DvE1ps3KmSnDeU3E/3MjCOWFZ1gOuV9rs7p19rOSxIyPHBYjpOi8/6UClzbf6yUUCUNqshCTI53Grd/bufo5fwDYsXAAgy+UhhSUSGRjNCmun0EirsXrK1vebrLR5GTET7ocUd/0CcFYjTDFNWAGJ6DsQUVKdNpZrxZuAj4XX8WnCY4gz+9xanUe8s88qbbZAbO3fQipDnIS0I/hK5jgrIgrjdCRK8EslzC3LNUil4VVabPM+YJrS5kjvrCt5/MgI4J19RmnzS/Krla+D+GN/2+cwn6K4YWmrJOZ+aJdX2Mp/F4lUQl6U4IHkRyM1KqMfAZwF6MZqJU1YCzgGMYF02qW1V9YBvgF8I024CvhOrW5vAa4IN44jkQaOeUmO/0FFF7h39hWlzamI0mzFqsCFSptPA8c0+npFFmnOobi9xmT6V1hF5sDZSHXrKmhVumwm/f9NkUjXFIVbFzlwpyOBF4d5Z2emCaulCacgJsEjqV5ZNbMzcHOacEOa8J5QwugUxFf264J9ZiFJllVwAp3nXH0MmKq0uUJpU5RGEFk0uBbpgp3HHsGk1xOhOeKHCsTeO1tFl1honQj/J+9sq6jYSKQSmldYLwA7e2dvVNrsBFzOUH6UBw72zj6fJoxBnhxPpLgdwCCZANyWJvwU+Eqtbh8Pvbe+iuSRNBTz57yzpylt1kCiGEttsOidna20UUgh4E5bL3wS+KTS5tfAcbFe4AK2Cm1iyuCMKmvReWfnBVN6XhDCOMSk95MeDz/w3KtQreYNLTa5uYVstLK90qaMHnWveGfPKOE4kR5oVljnemdvBPDOXqO0uQSpTnG0d/ZkWGD+uwBxyo4mGg0bd0oTJtXq9gbgeKXNTcBlSDfi00A6Hytt/ocKehd5Z+9S2uyAPHV30y9oIlL+6tdIUeC/lj23RYyJlBfFeR759cvK5FyKo+YOogeFFdI5inKvplNcz7BfxreRt2pzM1rZh4Wr4vTC80BUWCNEs0mw+QY7DvFVNZTV9khL+m2qn1rPrA38Nk1I0oQxoaju1kDa1MJ8jbydy8A7ezNSa/HvPew+EQnMuEBps3q5M4tUhXf2ISRSNI8tQyfqbtmG4kaj51ZYTPnNbeQxyjUyIjQrrP2VNkcpbd4ZzDE/9s5eDJAmHIWsGt4y6En2yDeAK9KEFb2z9yCmt+OVNh9S2kxCTIWV4Z29Dwny+D7SabVb9gXuD52VI4sGrSLneimI26rQ7Xk9HK9TWpkDQaJhI5GB06ywlgZOQUob3e2dvSFNGJMmfDd8XkaY+iDZFbg+TVgplKz/IdLg7lwG4Hvzzr7inf0KkvPVS+mclYALlDY/VdpU1kU2UhqXkl9GDORhMC8qN5fQ0kMViH8TzueqKAqhb9Bcfi0SGQhFUYIHZcoIncTwfKZ+eAzpq/MNpCnjtkgE1JZI4MTewBeRzry3UU403weAG9KEVcJFviMtOvdWgXf2fu/srmEuV7bbPodDgKubTJqRUUaozl4UZr4GCzcpbcWeFPefqjoH6qU28ljMOTIi5D3xneqdvQAgTTiW9q0F2nE7sqq5olZfuCJGK9KEVYDtkcCPneisNXcemwNXpgnb1er23mASvKLHY/WMd3YqsJvSZjMkgnEvOr/4t0VWW3svIY0gH2N4s89+6MUk2yvnUNxJYDKZhqZtKDIHPkf5zUebaVd5fTREBnfL/cC/SjjOiyUcI9IjzQrrFqTTI2nCPvTn57kS+EGtzk29HqBWZwbSltulCW9Dcr0Op33n0zy2Bs5PE3Stbq9U2pxA+dUuOsI7eweglTbHAscikWCdKOM9GUqMXtw5zzt73EhPolu8s39R2txDfsPDXZQ2q4aO3YUobcZTnLj78wG0i285P6T326IWxfq9Rp3RyKJL9ul+NrCvd3ZumvAuxCzXC38D/rNWZ7d+lFUztTpP1Oocg5RV6rVaxd7AUeH914C7yphbr3hnH/LOTkKSNIsSnZs5PuSRRUYvRflRy7BwM9I8DqDYXzyIkkjtogA3bCOPRCohq7AS7+z0NGF5xHncLlKomdcQJfCBWp3Kkl9rdf5Vq3MQUuusqLpAK36QJmzhnX0NOAxpOzKieGfv8c7ugJiM2vkPVqB/M22kWqZQbIac3GrHUHR6/wLxX72zd/YzsU7wzj5Fa7PgllXPIRLJo6Gw7kOCK0ACIrrNGXkG2KZW57u1+mAiiGp1bkAaIxblvhSxDHBOmjDWO3sT1RUP7Zpgstia9iaZyaGhX2QU4p19muKo0M3alOL6EGJFyGOQBWdbKcaPhKTmSGSgNE66b3lnX00TNiX4sLrgYWDLWp0/lzu19tTqPIs0tuu28vmmSDQiSLHaUVMXzTt7O1JItVWE5FuA9w9mRpEeaVU2aVILWVGwxRyqK3SbR6vr+S2M7uIBkcWUpZAmiReH379PfuRgEY8jK6uyuqp2Ta3OXCRoodsyS/U0YVXv7ONIFOOowTv7R9r7EKNZZnTzK+CfBbJ981IUlDbjED9rHpdlerkNgj+2kReZLSORylgKicZ6PU3YCgkd75QXgE/U6lSZwNgRwQy5P3QV5LECcHR4f2bpk+qfH7eRrzeQWUR6wjs7Dzi/QLwKQ926s+xOcf3JSgrdtuBaWvtT91XarDmoyUQiAEt5ZxutRI7tct9DanWq6HTaE7U6c5Cq2M91sdsRacLK3tl2eScDJzjXWz1Rl1F5OlItrZRMXqmmInPgo8Dv+p5NF4SmrK1yxpYBvjmg6UQiQPBhpQnr0N3q6ue1+gIz4qghrPYO62KXFRjdpo2nW8hi0MUoxzv7IMWmtYnZFUpo6bFtwbbnemer6uHWinZm6U8rbT4wkJlEIgwFXRxC53UCn2coYGHUUatzKeI/6JSiqgSjgVYJ0rMHNotIPxRF9i3F8E7C+5Nf9WQ+1Ra6LSSUZ2sVLTgGsEqbQTdujSyhNC6QT3Wxz0m1essn/9HA1+g8v2rTNMmtSjCiKG1qwFotNimjzEykeloVxJ2UeV9kDvxNCAwaKb7VRr4+4Lop7BuJ9MrYNGEDYIMOt3+JEsoCpQlrIkryg8DbEfPW00jdwStqdW7t5/i1OrenCdcihW47YWckWnI0sWcb+f0DmUWkL7yzLyltLgYOzhFvpLT5IJJkXJT7OOhgi2F4Zy9T2twAfKzFZjsB5yttJmd84pFI6YylO9/Vk8Cn0oTpiCP48RBW3hFpwsrACUi2f54PZkfgq2nCTcDhtTq3dzG3Zo4Brutw266K8lZNaC3x9TabDTzvLdIzZ5OvsECuhaI8wJQRKNKcw+FI7cBW1W8M8GaljfHOxn5ZkUoYS3f5PBsCZ2V+n58mPIEor0fCK/v+yUbli5CUfDWyomrHB4Fb04TP1Oq92e9rde5ihGsF9kKoYHEuxZ1mAf7unX10MDOK9It39malzX3kr6I+RXEZp0EUum2Ld/Y+pc2RtK+0MRG4Pay0fjuAqUWWMMYC7+tj/zFIS/q1gQ/nyF9LkwVtIt5L+9bbWZYBzk4TZtXqXNbHHAdG6NL8MnCRd/b5HvZfHXGwt+ub9JPuZxcZYc5GrAvNtApYGFFzYBbv7DlKm/cDn22z6drA9UobDxznne0r9UVpszIS+Xu5dzaawZdwxgL/Bjaimm7CYxGn7Po97r8UorSWBa6q1Ud9L5odkf5dpwW7/y8Rp/mDrXZS2qyNRGp+EXhjmzH+Afy0hLmOdsYrbbYp8XhzvLOVFWXugCnAd+m8ksxt3tnbKpxPLxwJrIr0cWuHApTS5jdIJZmr27VVWbCjNusiq7XtkYe3ccCt9Oe33bjk82lmKKPWL8uXPC+QbvEdfddNjK1gLvd5Z0sLEBtbq7NNmrAGsBtyIm7D6OooujJSQ21OmnAN0rF4tCqvt4WfyyIX2g4ASpsZwFSkyPATwFzkInw7YpLdnM4fGA4PSZ2LOwdSHDnXC48B40s8Xld4Z/+ttLkKuc46YdSsrhp4Z+cpbfZBUlsO6XC37cKL0CfsLmA6UjB7HrA8co2vBrwzvPIaRPabKH9MeJXFHyinnuLqlJ8Uvju9+T5XqGAukykxLWMsSMsOpDzRmWnCakjx1d2RyKDREq66PDKvPRhSXh64ulana/NbRRSFoa+CPDFO7PP43/bOFlUBj4x+zqEzhfUKo6y+ZYNQcurTSpsHge/Q3f1hE/IbW3bCSj3uF1mMWGglVavzdK3OmbU6ExHtfwjSXHCQbcbb0VBePweeThN+mSbsnyYjd1IrbVag2ovqO97ZeoXHj1TPr+gsf+5y72xa9WT6wTv7A2ArxGowCGIpskhr01+tzoxanbNrdXZAluwHIPXFRlOuxbJIHtXPGK68Bn2Cv639Jj0xA9De2W5rPUZGGaFpaFFB3CyjzhyYh3f2r0hPus8j52mVxBVWpHNfVa1OWqszpVZnF4aU1xW07kw6aLLK65k04do04eA0YZUBjL0iYsopiznAqcDG3tmLSjxuZGRpp4weBxaZkHDv7Fzv7KmIf/BzwAMVDRVXWJHe/FPBZzQFmJImvBFREnshScjLlze9vhjLkN/ozDTht0jAxuW1evlPg97ZaUqbVZFAi52BCXSWc5ZlHvAn4DLgggEmYL4OhX7AKv2Dsys+fpZZXW7fal49F6L1zj4QIueKisb+tM9Ct3MpnnurdiF94Z19AYmOPR3523YHPoH4rHoN4noVuBn4BZ359F5icOdTN0Ff8xjcvKB1Q9pBz6VUa1ypoexpwgrIDXsv5KbdqnjrSPEacCOivC6rsi6i0mZ9JM/t3Ujb81p4vRrm8SySVvAAEj01zTs7GqMfI5GeCIVxt0CSptdFEuLfiFTNWIEhJToDiRx8mqHr4Z5Y6imSpYrcKwDShHHIimsPYFfa5xeNBK8Dv0eU14WjKNowEolEIk1UprCypAkTgOsZXfldzXygVmfqSE8iEolEIvkMRGEBpAmTkYZw3SgtDxyB+ILWC691w2s9pAxMGXli84AVavVSgyYikUgkUiJj0oRV6TwkO63VeazXwdKEbZGaau2CEeYA3wa+V6sXO7jThLHI3LOKrPHamPyM+TzurNXZrMNtI5FIJDICjEkTPowEIXTCY8D6jQrsvRB8W/uF1xZIiSKQhov3IqHyZ9Xq9NW0Lk04DVmddcJJtTpH9zNeJBKJRKplTJosaJ7Yaa6SrtUpJS8ojP1mJH/qmbJMcmHV+AidB3pMqNX5fRljRyKRSKQaxgCkCefReaHR+4B31+qjqlTTMNKEE6DjFdNzwBqj+e+JRCKRyFDAwtl0rrA2Bo4CTqpkRn2SJmyCZNx3yvn9KCulzRrAGm02m11mLx+lzTikJUwez3tnHylrrILxV0MqzL8ZSUK81zv7cAXjbALMy/vulDbLIkmpz3hnnyx53KWR3LlXvLP3thj7Se/sM2WOnTNWo4I5yPe80HxKHu/tiLXlrlDodiAobdZEeua9CemfN3XA449F/qerIjmSj3hn/1HRWOsipaZK/46VNmsBbykQP9JLn74Ox23knC4NPIy0xyn9/9eo1v7HNOFehi6MdiRpwtW1+sAKX3ZEmrAMUvpm2S52O6PPYQ8DvtlmmzuQi7EsNgKKeiVdSectLLpCabMZ0oRwuxzZId7Zdh1pu+UaYCb5392ayHdwKlLLrkxWDMdGabO1d/bPBWN/ATil5LEJ424F/Bh5MMh+/lfgMO/stCrGBRLk4bWGfPeVEhTVaUhljGzU8j+VNv/tnb2w4vHXAY4D9qTJhaC0udY7u2MFw/4Q+CTVfMdfQhYUefTadqQQpc1KSCm8XZtElyM5uKWSDTH/QRf7vQG4JFS2GE18H+kv1SlX1uo81OeYDjkRGq9bw+fZz77Q5xhFnI+UgMq+KimSq7TZGbgFeYo6BngPUlNyE6Si/2+qGHcU8FOlzXKDHFBp8zHgBuT71cgK/u3AfyMWjhuDQlukCcrqFqTAwFeQeoSrIze62YBV2hxZ4fgfQR48NNKzaTvkoX0rYBJwcVVjD4BPs/C94U8VjHMWsAtybr4V+f/tRkVNZrM5TBcgN7tOuwNvClycJuzaT9RgWaQJh9GdYphP+5VRW7yz95FpsaC0mRQ+L/VJpoBHvbO/r3qQYCa6ECkltbV3Npva8AwS3bk4cg1yMz0GWXlUTjD3TgFeBj7knc1Gy54cVli/A36mtHnnIM1mFXAmkku5k3f2V5nPL1fa3Az8FThRaXO1d3Z6mQMrbd6KrDbmAVt4Z+9u2uQvZY43AkwrqSNyIUqbZZDO0td7Z0/OiK6saswFK6zgx/lal/vvBLjQwn7ESBMOQcwn3XBhrc4dVcxnMeRoxFzy2SZltbiCJYl3AAAGwklEQVQzFeks+3WlTZHPsGz2RUyO32tSVgB4Z/+APDxsAFRhrhoIwTe3C/CLJmUFQGirfhxi3j+sgil8BTHJHZqjrCKdsXR4vWlQAw6rOlGrczFwbZfH2BO4aqSaJ6YJX0OWn91U0JiJLGEjnbEbsrq6eqQnMmCWRZT1MsBPlDaDqAzT6Ep9aYttLgk/J1Q8lypp+EEvabFN4zvYpoLxFZLOc3kFx14i8M7OQfTFlkqbHyltKldceWWNDgfupLtK69sB09KET9Xq/K2UmbUhTaghikr1sPvRtXpHnV9HO4cpbZoDLOre2V+UNUDw36wN/M47O7+s43bBu5U2eY7pQdSlfENoG/MT4FDgYKS8WJWMB17yzj7aYpu/h59rVTyXKmm4HgrNyd7ZVGnzFHL+lUboDr4WcF3zOR0iU7MWo8oi6yrmIqXN7OwH3tkyA78aHAT8EjgSmKS0OQs42Tv7zwrGWviir9WZTm9L8HcAN6cJ306TantipQl7IEq1F2V1GYtIR9cOeBSpNp99la2IG5VIRqpR5wzEId78arUCKZuvIb66E0LPsyp5A7RNs2j4rQZWC7QCGufVy222q8JH94bwM69v1DVIIEbjtaiuYqex8L2hdILp9j8RU/aDiEXifqXNJ6oYL7dwbK3OBWnCR5BIk25YFgncODBNSICf1erlNfAKZaS+DXy0x0M8AEyq1RmJlUIVXOudPa7KAbyzM5U285A+RiPBk97ZhcLWlTbjgcmDmIB3dobS5vNIE8Hjge9UONzTwDuVNiuGpoh5jA8/F2UrQaMP3ToUrLLC6v6tSG+sMnkOUVbr5si2Ru6LeyIpHIsqJ1QddNHAO/saYJGozt2QMPefK23e7p3ttnFqS1qZVY6g91DltRFz3WNpQpImbNzjcUgTVkkTPpMmTEVqHvaqrJ4FdqvVKboJRIq5GdgkJAcukXhnLfBrJIQ/70ZXFrcgK6cdWmyzffhZRZjyoLgl/GwVODIBUR43lTlw6Oh8E3JOb9AkeyKYY58tc8wlhRAdfSqSGN1NilFHFCqssDLai+IE1U5YA/gGcG+acH+a8OM04YA04b3BBzWMNGH5NGGDNGG3YFr8I9KR9yzg/X3MYxawY62+2IZfV00jIfiUUAViSeW/ENNo2YnKWS4IP78eKmoMI1RWORS5Lq6qcB5Vcx2yQjw4JO8OI5xnjZzCshPSQULqAU4PVS4i5TEj/CzdnNvScR068E5gKBm2HzZELvjzESU4I02YnSbMTBPSNGEWkiz4ABK5cyxDy/N+mAXsXKtTVWWAJYEpwG+BnYGrgmN6AUqb8UqbTlu5LLKEXKDjkCoFlZiVvbN/R55QNwMuVdosKLMTQut/BawMHOmdnZ1/lNGPd3Yu4qhfAfiV0mbThiycSxcAHwJO887289BcxEXIfWZ74HqlzQeaokBXrGDMxQqlzdJKm0OVNm/MfPYOpNLGDCrIZWurDGp1nk8TtkeCFT5W8vjLh1dVPImsrMq2gY8Wvqm0aU5+ft47u3KZg3hn5wXb9BmIc3UHpc2/ED/EWxA/w2QkGGJx52TkO3hPhWP8N2IWPBJ4QmlzO7BcGPMF4EDvbKtw8DJIlTbNn33BO1taKSrv7KVKm4OAHwF3KW3uRB5aN0NSCU4GvlzWeE1jz1faaMQf+Tnk5jpDafMcYs5aLWy6qDZ1vS3n/3e+d3ZSiWNsgaxUT1Pa3I+co+sj/8O9vbMvlTgW0OHqJaO0Tqa7wrIjyS3A3rU6lRSwbMHZVBSRk+FJiqt6VHKBeWdfBPZX2vwPUjfsHcgJmiK1EksLpc+QUPz3zEC+gyqevmcXHds7+5rSZh/kyfwPFYxNqF5xlNLmTMT5vw4SJHAG4L2zVfpXLFDkrC/97/XOnqu0uRrYG6meszRSgeIy7+wDZY/XNPZc4EtKmxOQ/+dGyMpqBlLA9Q/e2ScqGLpxj6hihXw5Ej2cxz1lDuSdvUVpsyXibx2PRLf+L+BC9GDpdB0Wmybsg0yq1Kf4kjkV+HKZEYqRSCQSGVl6yuNIE9ZCEihbRTKNBA8Ch9bq/G6kJxKJRCKRcukr8TBN2AUxE76jnOn0zCzgROCEWn3EElwjkUgkUiF9Z8qHwrf7IcUkN2izedm8iBS9PbFWj3kTkUgksjhTWmmXNGEppPrywUgyYJW5DXch0SlTYiJwJBKJLBlUUossTVgDUV6fALalu0K6ecxDeuNcCVxRq5cb7RKJRCKR0U/lxTPThLFIuOoWSH7FukiY7ppIAcxGHtarSCHMZ4HHgenA/UjS8rRandJj+iORSCSy6PD/poAa8xfPfa8AAAAASUVORK5CYII=";

function Header({
  user,
  onLogin,
  onLogout,
  onCreateAccount
}) {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "storybook-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: img
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

var css_248z$1 = ".sb-show-main.sb-main-centered #storybook-root{box-sizing:border-box;margin:auto;max-height:100%;padding:0;width:100%!important}.footer{background:#f7f7f7;width:100vw}.footer:before{content:\"\";display:block;height:1rem;margin-top:-1.1rem;position:absolute;width:100%}.copyright{background:0 0;box-sizing:border-box;font-size:15px;line-height:1.42857143;margin:0 auto;padding:2rem 0;text-align:left;width:700px}.copyright,.copyright ul.footer-bottom-links li{color:#53585a;font-family:Lato,Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400}.copyright ul.footer-bottom-links li{text-size-adjust:100%;--swiper-theme-color:#007aff;--swiper-navigation-size:44px;display:inline-block;font-size:1.4rem;line-height:1rem;list-style-type:none;margin:0}.copyright ul.footer-bottom-links{color:#53585a;float:right;line-height:1.7rem;list-style-type:none;margin:0;padding:0;text-align:left}.copyright ul.footer-bottom-links li a{color:#ef8200;font-size:15px}.copyright ul.footer-bottom-links li a,.country-name{text-size-adjust:100%;--swiper-theme-color:#007aff;--swiper-navigation-size:44px;font-family:Lato,Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.7rem;list-style-type:none;text-decoration:none;transition:all .3s ease}.country-name{color:#53585a;font-size:10px}";
styleInject(css_248z$1);

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

var css_248z = ":root{--dse-body-text-color:#1d1f22;--dse-body-bg-color:#fff;--dse-btn-primary-color:#fff;--dse-btn-primary-bg:#5ece7b;--dse-btn-primary-bg-hover:#9ee2b0;--dse-btn-secondary-color:#fff;--dse-btn-secondary-bg:#1d1f22;--dse-form-color:#1d1f22;--dse-form-bg:#fff;--dse-form-error-color:#d12727;--dse-form-error-border:#d12727;--dse-form-border-focus-color:#5ece7b;--dse-body-font-size:1rem;--dse-body-font-weight:400;--dse-h1-font-size:1.375rem;--dse-h2-font-size:1.375rem;--dse-h3-font-size:1rem;--dse-h4-font-size:1.125rem;--dse-h5-font-size:0.75rem;--dse-h6-font-size:0.75rem;--dse-h1-font-weight:500;--dse-h2-font-weight:500;--dse-h3-font-weight:500;--dse-h4-font-weight:400;--dse-h5-font-weight:400;--dse-h6-font-weight:300}body{font-family:var(--dse-body-font-family,\"Playfair Display\",serif);font-size:var(--dse-body-font-size,.875rem);font-weight:var(--dse-body-font-weight,400)}";
styleInject(css_248z);

exports.Button = Button;
exports.Footer = Footer;
exports.Header = Header;
//# sourceMappingURL=index.js.map
