function alertKlik(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
  onClick: alertKlik.bind(this, 'Halo semuanya')
}, "Click Me"));
ReactDOM.render(element, document.querySelector('#root'));