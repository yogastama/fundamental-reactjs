function App(){
    const [count, setCount] = React.useState(0);

    return (
        <>
            <button onClick={() => setCount(count - 1) }>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1) }>+</button>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));