import CardNew from "./components/CardNew";


function App() {
    return (
        <div className="App">
            <CardNew title={'hi'} />
            <CardNew text={'how are you?'} />
            <CardNew title={'hi'} text={'how are you?'} />
        </div>
    );
}

export default App;