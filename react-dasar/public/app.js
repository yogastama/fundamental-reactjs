function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [message, setMessage] = React.useState('');

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      setMessage('Isi dulu ta');
      return;
    }

    if (edit.id) {
      //* get index todo
      const indexArray = todos.findIndex(todo => edit.id === todo.id);
      const updatedTodos = [...todos];
      const updatedTodo = {
        id: edit.id,
        name: activity
      };
      updatedTodos[indexArray] = updatedTodo;
      setTodos(updatedTodos);
      setActivity('');
      setEdit({});
      return;
    }

    setTodos([...todos, {
      id: Date.now(),
      name: activity
    }]);
    setActivity('');
  }

  function editTodoHandler(todo) {
    setEdit(todo);
    setActivity(todo.name);
  }

  function cancelEditHandler() {
    setEdit({});
    setActivity('');
  }

  function deleteTodoHandler(idTodoDelete) {
    const filteredTodos = todos.filter(todo => todo.id != idTodoDelete);
    setTodos(filteredTodos);
    cancelEditHandler();
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Simpan perubahan' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal Edit")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.name, /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: deleteTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));