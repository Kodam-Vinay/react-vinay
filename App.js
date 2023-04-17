
const parentElement = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "This is an h1 Tag"), React.createElement("h2", {}, "This is an h2 tag")]),React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "This is an h1 Tag"), React.createElement("h2", {}, "This is an h2 tag")])]);
console.log(parentElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentElement);