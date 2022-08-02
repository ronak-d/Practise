import React from 'react';        //Just imports react from react to form elemnts;
import ReactDOM from 'react-dom'; //only maintains elements to perform dom manupilation;

// both are very different react and react dom;

// task 1 to form an p tag name ronak and h1 heelo react;
// then in console heelo react should come inside p element;

// FORMAT = React.createElement("element to create", {className:"classname"}, "input of an element");


const p = React.createElement(
    "p",
    {className:"pEle"},
    "Ronak Dodeja"
)

const h1 = React.createElement(
    "h1",
    {className:"h1Ele"},
    "heelo react"
)

