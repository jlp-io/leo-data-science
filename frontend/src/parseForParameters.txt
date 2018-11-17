//import fs from 'fs';
import App from "./App.js"

export default class ParserForParameter{
	constructor(app){
		this.app = app;
		this.csvData = "";
		this.universities = [];
		this.subjects = [];
	}

	getCSVString(dataFile){
		/*var fs = require('fs').default;
		var wholeString = fs.readFileSync(dataFile);
		this.csvData = wholeString.substring(wholeString.indexOf("/n"));
		console.log(this.csvData.substring(0, 10));*/
		var reader = new FileReader();
		var parse = this.parse;
		reader.onload = function(e) {
  			var wholeString = reader.result;
  			this.csvData = wholeString.substring(wholeString.indexOf("prAttIncluded") + "prAttIncluded".length);
			this.parse();
			this.app.rerender();
			//console.log(this.csvData.substring(0, 10));
		}.bind(this);
		reader.readAsText(dataFile);
	}

	parse(){
		var arrayOfData = this.csvData.split("\n");
		var previousStringIndex = 0;
		for(var i = 0; i< arrayOfData.length; i++){
			var stringToWorkOn = arrayOfData[i]; 
			for(var j = 0; j< 4; j++){
				var secondCommaIndex = stringToWorkOn.indexOf(",", previousStringIndex);
				var newData = stringToWorkOn.substring(previousStringIndex, secondCommaIndex);
				switch(j){
					case 1: 
							this.addToArray(this.universities, newData);
							break;
					case 3: this.addToArray(this.subjects, newData);		
				}
				previousStringIndex = secondCommaIndex + 1;
			}
			previousStringIndex = 0;
		}
	}

	addToArray(array, newData){
		var boolean = true;
		for(var i = 0; i< array.length; i ++){
			if(array[i] == newData){
				boolean = false;
			}
		}
		if(boolean){	
			array.push(newData);
		}
	}

	getUniversities(){
		return this.universities;	
	}

	getSubjects(){
		return this.subjects;
	}
}