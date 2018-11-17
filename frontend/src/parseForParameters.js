

export default class ParserForParameter{
	constructor(app){
		this.app = app;
		this.csvData = "";
		this.universities = [];
		this.subjects = [];
	}

	getCSVString(dataFile){
		/*var fs = require('fs');
		var wholeString = fs.readFileSync("./SFR18_2017_Institution_subject_data.csv", 'utf8');
		this.csvData = wholeString.substring(wholeString.indexOf("prAttIncluded") + "prAttIncluded".length);
		this.parse();
		this.app.rerender();*/
		/*var fs = require('fs');
		fs.readFile("./SFR18_2017_Institution_subject_data.csv", function(err, data){
			var wholeString = data;
			this.csvData = wholeString.substring(wholeString.indexOf("prAttIncluded") + "prAttIncluded".length);
			this.parse();
			this.app.rerender();
		}.bind(this));*/

		var reader = new FileReader();
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
		this.csvData = arrayOfData;
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

	retrieveData(parameters){
		var retrievedData = [];
		var previousStringIndex = 0;
		for(var i = 0; i< this.csvData.length; i++){
			var line = this.csvData[i];
			var university = "";
			var subject = "";
			for(var j = 0; j<4; j++){
				var secondCommaIndex = line.indexOf(",", previousStringIndex);
				var newData = line.substring(previousStringIndex, secondCommaIndex);
				switch(j){
					case 1: 
						university = newData;
							break;
					case 3: 
						subject = newData;		
					}
					previousStringIndex = secondCommaIndex + 1;
				}
			if(parameters["university"] == ""|| university == parameters["university"]|| parameters["university"] == null){
				if(parameters["subject"] == ""|| parameters["subject"] == null|| subject == parameters["subject"]){
					retrievedData.push(this.createDataObject(line));
				}
			}	
			previousStringIndex = 0;
		}
		return retrievedData;
	}

	createDataObject(line){
		var arrayOfTypes = ["UKPRN", "providerName", "Region", "subject", "sex", "yearsAfterGraduation", "grads", "unmatched", "matched", "activityNotCaptured", "noSustDest", "sustEmpOnly", "sustEmp", "earningsInclude", "lowerAnnEarn", "medianAnnEarn", "upperAnnEarn", "POLARGrpOne", "POLARGrpOneIncluded", "prAttBand", "prAttIncluded"];
		var toReturn = {};
		var previousStringIndex = 0;
		for(var i = 0; i<arrayOfTypes.length; i++){
			var secondCommaIndex = line.indexOf(",", previousStringIndex)
			var newData = line.substring(previousStringIndex, secondCommaIndex);
			toReturn[arrayOfTypes[i]] = newData;
			previousStringIndex = secondCommaIndex + 1;
		}
		return toReturn;
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