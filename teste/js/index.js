//ReactDOM.render(<Hello />, document.getElementById('root'));
//ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <>
        <MyApp />
        <MostraTexto texto="Professor Marcos!"/>
        <MontaArray />
        <MontaJSON />
        <Destructure />
        <SpreadOperator />
        <Ternario numero="13"/>
    </>
);