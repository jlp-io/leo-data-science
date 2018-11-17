import React, {Component} from 'react';
import data from './Data'
import Plotly from 'plotly.js-dist';


var traceSingleLine = function(provider, sex, subject, name) {
    
    if (!name) {
        name = "";
    }

    let list = data();

    var xVals = list[provider][sex][subject].years;
    let yVals = list[provider][sex][subject].earnings;
    let typeVal= 'scatter';
    let nameVal = name;
    
    let trace = {};
    trace.x = xVals;
    trace.y = yVals;
    trace.name = nameVal;
    trace.type = typeVal;

    return trace;
}

// testing
var drawMyPlot = function() {
    let providers = ["Imperial College of Science Technology and Medicine", "Aston University"]
    let subjects = ["Computer science"];
    drawPlots(providers, subjects, 'plotme');
}

//
// providers: an array containing provider names. MUST be an array
// subjects: an array containing subjects. MUST be an array
// divid: the id of the div where the plot should be rendered
var drawPlots = function(providers, subjects, divid) {
    if (!divid) {
        divid = "body";
    }
    
    let traces = [];
    let layout = {
        title: "Average earnings by years after graduation"
    }

    providers.forEach(function(provider) {
        subjects.forEach(function(subject) {
            traces.push(traceSingleLine(provider, "Both", subject, provider + " (" + subject + ")"))
        })
    });

    Plotly.plot(divid, traces, layout);
}

export default drawMyPlot;