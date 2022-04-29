function App() {
  function formSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: formSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));