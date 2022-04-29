function App(){
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [message, setMessage] = React.useState('');

    function saveTodoHandler(event){
        event.preventDefault();
        if(!activity){
            setMessage('Isi dulu ta')
            return;
        }
        if(edit.id){
            //* get index todo
            const indexArray = todos.findIndex((todo) => edit.id === todo.id);
            const updatedTodos = [...todos];
            const updatedTodo = {
                id: edit.id,
                name : activity
            };
            updatedTodos[indexArray] = updatedTodo;
            setTodos(updatedTodos);
            setActivity('');
            setEdit({})
            return;
        }
        setTodos([...todos, {
            id: Date.now(),
            name : activity
        }]);
        setActivity('');
    }
    function editTodoHandler(todo){
        setEdit(todo);
        setActivity(todo.name);
    }
    function cancelEditHandler(){
        setEdit({});
        setActivity('');
    }
    function deleteTodoHandler(idTodoDelete){
        const filteredTodos = todos.filter(todo => todo.id != idTodoDelete);
        setTodos(filteredTodos);
        cancelEditHandler();
    }   
    return (
        <>
            <h1>
                Simple Todo List
            </h1>
            {message && <span style={
                {
                    color:'red'
                }
            }>{message}</span>}
            <form onSubmit={saveTodoHandler}>
                <input type="text" value={activity} onChange={function(event){
                    setActivity(event.target.value);
                }} />
                <button type="submit">
                    {edit.id ? 'Simpan perubahan' : 'Tambah'}
                </button>
                {edit.id && <button onClick={cancelEditHandler}>
                    Batal Edit
                </button>}
            </form>
            <ul>
                {
                    todos.map(function(todo){
                        return (
                            <li key={todo.id}>
                                {todo.name}
                                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                <button onClick={deleteTodoHandler.bind(this, todo.id)}>Hapus</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector('#root'));