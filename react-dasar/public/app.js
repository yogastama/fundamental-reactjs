function SayHelloComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: 'blue',
      marginBottom: '10px'
    }
  }, "Halo ", props.name);
}

const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SayHelloComponent, {
  name: "Yoga"
}), /*#__PURE__*/React.createElement(SayHelloComponent, {
  name: "Frankl"
}), /*#__PURE__*/React.createElement(SayHelloComponent, {
  name: "Nice"
}));
ReactDOM.render(element, document.querySelector('#root'));