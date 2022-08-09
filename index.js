import React from 'react';        //Just imports react from react to form HTML elemnts;
import ReactDOM from 'react-dom'; //only maintains elements to perform dom manupilation;

// both are very different react and react dom;

// task 1 to form an p tag name ronak and h1 heelo react;
// then in console heelo react should come inside p element;

// FORMAT = React.createElement("element to create", {className:"classname"}, "input of an element");
// Render means to SHOW/DRAW something.

ReactDOM.render(    //elements to peform dom manupulation and show element[what to show] | and [where to show/draw].
    p, // [what]
    document.getElementById("root") //[where].
)

const p = React.createElement(
    "p", 
    {className:"pEle", id:"uuvid"},
    "Ronak Dodeja"
)

const h1 = React.createElement(
    "h1",
    {className:"h1Ele"},
    "heelo react"
)

//  jsx is an extended version of html


// just an experiment to test functions 
// passing child function vslue to the parent function app;

// parent function;
function app() {
    let printname = (value)=>{
        console.log(value + "is in parent");
    }
    return child(printname);
}
// passing child function vslue to the parent function app;
function child() {
    let childname = "ronak";
    printname(childname);
}