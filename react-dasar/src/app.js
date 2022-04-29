function App(){
    function formSubmit(e){
        e.preventDefault();
        console.log('submitted')
    }
    return (
        <>
            <form onSubmit={formSubmit}>
                <div>
                    <label>Nama :</label>
                    <input type="text" name="nama" />
                </div>
                <button type="submit">Kirim</button>
            </form>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector('#root'));