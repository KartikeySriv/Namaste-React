const div = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1",{},"H1 HU MAI")))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div)