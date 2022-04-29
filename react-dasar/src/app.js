function App(){
    const fruits = [
        'Apple',
        'Orange',
        'Grape'
    ];
    return (
        <>
            <ul>
                {
                    fruits.map(function(fruit){
                        return <li key={fruit}>{fruit}</li>
                    })
                }
            </ul>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector('#root'));