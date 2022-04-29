function SayHelloComponent(props){
    return <div style={
        {
            width: '200px',
            height: '200px',
            backgroundColor : 'blue',
            marginBottom:'10px'
        }
    }>Halo {props.name}</div>;
}
const element = (
    <>
        <SayHelloComponent name="Yoga" />
        <SayHelloComponent name="Frankl" />
        <SayHelloComponent name="Nice" />
    </>
);

ReactDOM.render(element, document.querySelector('#root'));