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

var drawPlot = function() {
    let dataM = traceSingleLine("Imperial College of Science Technology and Medicine", "Male", "Computer science", "Males");
    let dataF = traceSingleLine("Imperial College of Science Technology and Medicine", "Female", "Computer science", "Females");
    let dataB = traceSingleLine("Imperial College of Science Technology and Medicine", "Both", "Computer science", "Average");
    console.log(data);
    Plotly.plot('plotme', [dataM, dataF, dataB]);
}

var drawMyPlot = function() {
    drawPlots(["Imperial College of Science Technology and Medicine", "Aston University"], "Computer science");
}

// draw multiple plots: multiple providers, single subject. default sex average
var drawPlots = function(providers, subject) {
    let traces = [];
    let layout = {
        title: "Average earnings by years after graduation"
    }

    providers.forEach(function(provider) {
        traces.push(traceSingleLine(provider, "Both", subject, provider))
    });

    Plotly.plot('plotme', traces, layout);
}

export default drawMyPlot;