import React, {Component} from 'react';
import data from './Data'
import Plotly from 'plotly.js-dist';


var traceSingleSubSexInstitution = function(provider, sex, subject, name) {
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
    let dataM = traceSingleSubSexInstitution("Imperial College of Science Technology and Medicine", "Male", "Computer science", "Males");
    let dataF = traceSingleSubSexInstitution("Imperial College of Science Technology and Medicine", "Female", "Computer science", "Females");
    let dataB = traceSingleSubSexInstitution("Imperial College of Science Technology and Medicine", "Both", "Computer science", "Average");
    console.log(data);
    Plotly.plot('plotme', [dataM, dataF, dataB]);
}

export default drawPlot;