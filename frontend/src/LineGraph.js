import React, {Component} from 'react';
import data from './Data'
import Plotly from 'plotly.js-dist';


var traceSingleSubSexInstitution = function(provider, sex, subject) {
    let list = data();

    var xVals = list[provider][sex][subject].years;
    let yVals = list[provider][sex][subject].earnings;
    let typeVal= 'scatter';
    let nameVal = 'Median earnings by years after graduation';
    
    let trace = {};
    trace.x = xVals;
    trace.y = yVals;
    trace.name = nameVal;
    trace.type = typeVal;

    let layout = {
        name : provider
    }

    return [trace, layout];
}

var drawPlot = function() {
    let data = traceSingleSubSexInstitution("Imperial College of Science Technology and Medicine", "Male", "Computer science");
    console.log(data);
    Plotly.plot('plotme', [data[0]], data[1]);
}

export default drawPlot;