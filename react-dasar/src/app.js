function App(){
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(function(){
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json();
            setNews(response);
            setLoading(false);
        }
        getData();
    }, []);
    return (
        <>
            <h1>Data Fetch</h1>
            <ul>
                {
                    loading ?
                    <li>Loading...</li> :
                    news.map(function(item){
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </>
    )
}
ReactDOM.render(<App />, document.querySelector('#root'));