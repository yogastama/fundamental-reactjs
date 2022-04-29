function alertKlik(msg){
    alert(msg)
}
const element = (
    <>
        <button onClick={alertKlik.bind(this, 'Halo semuanya')}>
            Click Me
        </button>
    </>
);

ReactDOM.render(element, document.querySelector('#root'));