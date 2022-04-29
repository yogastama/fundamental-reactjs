function App() {
  const [login, setLogin] = React.useState(false);
  const titleAppRef = React.useRef(null);
  React.useEffect(function () {
    console.log('Hello');
    titleAppRef.current.textContent = 'Login App';
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: titleAppRef
  }, "Simple Login Application"), /*#__PURE__*/React.createElement("p", null, login ? 'Udah login' : 'Belum login'), /*#__PURE__*/React.createElement("button", {
    onClick: () => login ? setLogin(false) : setLogin(true)
  }, login ? 'Logout' : 'Login'));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));