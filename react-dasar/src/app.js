function App(){
    const [login, setLogin] = React.useState(false);
    const titleAppRef = React.useRef(null);
    React.useEffect(function(){
        console.log('Hello');
        titleAppRef.current.textContent = 'Login App';
    }, []);
    return (
        <>
            <h1 ref={titleAppRef}>
                Simple Login Application
            </h1>
            <p>
                {login ? 'Udah login' : 'Belum login'}
            </p>
            <button onClick={() => login ? setLogin(false) : setLogin(true)}>
                {login ? 'Logout' : 'Login'}
            </button>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector('#root'));