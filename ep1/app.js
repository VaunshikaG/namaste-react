
// React.createElement is just creating object in react but to h1 element into browser we need reactdom

/*
*
createElement(tag name, object, data you need to put in tag)
object in createElement is used to give attributes to tag

(id, attributes, children)
to pass multiple child pass an array => (id, attributes, [child, child])
*
*/

const headingExample = React.createElement("h1", { id: "example", xyz: "abc" }, "Hello World from React!");

console.log(headingExample);

const heading = React.createElement("h1", {}, "Hello World from React!");

// to create h1 tag and put it inside root which is created by createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// to render everything inside root 
// converts react obj heading into h1 tag 

root.render(headingExample);


// ReactElement(object) => HTML(Browser understands)

// Nested div

/* 
1)
<div id = "parent">
    <div id = "child">
        <h1>nested div</h1>
    </div>
</div>

2)
<div id = "parent">
    <div id = "child">
        <h1>nested div</h1>
        <h2>nested div</h2>
    </div>
</div>

3)
<div id = "parent">
    <div id = "child">
        <h1>nested div</h1>
        <h2>nested div</h2>
    </div>
    <div id = "child">
        <h1>nested div</h1>
        <h2>nested div</h2>
    </div>
</div>

*/

const parent1 = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I am a nested div in react."),
    ),
);


const parent2 = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "I am a nested div in react."),
            React.createElement("h2", {}, "I am a nested div in react."),
        ],
    ),
);

const parent3 = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [
                React.createElement("h1", {}, "I am a nested div in react."),
                React.createElement("h2", {}, "I am a nested div in react."),
            ],
        ),
        React.createElement("div", { id: "child" },
            [
                React.createElement("h1", {}, "I am a nested div in react."),
                React.createElement("h2", {}, "I am a nested div in react."),
            ],
        ),
    ],
);

console.log(parent2);

root.render(parent3);