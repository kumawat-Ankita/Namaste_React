/**
 * 
 * <div id="parent">
 *      <div id="child">
 *           <h1>I'am Ankita Kumawat</h1>
 *           <h1>I'am from Anjad</h1>
 *      </div>
 *      <div id="child2">
 *           <h1>I'am Ankita Kumawat</h1>
 *           <h1>I'am from Anjad</h1>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I.am Ankita Kumawat"))
)

const root = ReactDOM.createRoot(document.getElementById("parent"));

root.render(parent);