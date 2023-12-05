import "./App.css";

function AppJSX() {
    const name = "seon";
    const list = ["우유", "바나나", "요거트"];
    return (
        <div>
            <h1 className="orange">Hello!! {name}</h1>
            <h2>hihi</h2>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default AppJSX;
