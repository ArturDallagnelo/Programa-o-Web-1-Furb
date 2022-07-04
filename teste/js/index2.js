const NomeContext = React.createContext();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <>
        <MyApp2 />
        <MyUseEffect />
        <ExEvento />
        <div className="border border-5 border-primary">
            <MyHook1 />
        </div>
        <ReadJSON />
    </>
);