var jsonData = [
	{
		"UKPRN": "10003270",
		"providerName": "Imperial College of Science Technology and Medicine",
		"Region": "London",
		"subject": "Computer science",
		"sex": "Male",
		"yearsAfterGraduation": "1",
		"grads": "45",
		"unmatched": "x",
		"matched": "x",
		"activityNotCaptured": "x",
		"noSustDest": "x",
		"sustEmpOnly": "x",
		"sustEmp": "x",
		"sustEmpFSorBoth": "x",
		"earningsInclude": "30",
		"lowerAnnEarn": "31500",
		"medianAnnEarn": "40000",
		"upperAnnEarn": "47300",
		"POLARGrpOne": "x",
		"POLARGrpOneIncluded": "x",
		"prAttBand": "x",
		"prAttIncluded": "x"
	},
	{
		"UKPRN": "10003270",
		"providerName": "Imperial College of Science Technology and Medicine",
		"Region": "London",
		"subject": "Computer science",
		"sex": "Male",
		"yearsAfterGraduation": "3",
		"grads": "65",
		"unmatched": "x",
		"matched": "x",
		"activityNotCaptured": "x",
		"noSustDest": "x",
		"sustEmpOnly": "x",
		"sustEmp": "x",
		"sustEmpFSorBoth": "x",
		"earningsInclude": "45",
		"lowerAnnEarn": "39800",
		"medianAnnEarn": "52000",
		"upperAnnEarn": "60000",
		"POLARGrpOne": "x",
		"POLARGrpOneIncluded": "x",
		"prAttBand": "x",
		"prAttIncluded": "x"
	},
	{
		"UKPRN": "10003270",
		"providerName": "Imperial College of Science Technology and Medicine",
		"Region": "London",
		"subject": "Computer science",
		"sex": "Male",
		"yearsAfterGraduation": "5",
		"grads": "60",
		"unmatched": "x",
		"matched": "x",
		"activityNotCaptured": "x",
		"noSustDest": "x",
		"sustEmpOnly": "x",
		"sustEmp": "x",
		"sustEmpFSorBoth": "x",
		"earningsInclude": "35",
		"lowerAnnEarn": "31500",
		"medianAnnEarn": "60200",
		"upperAnnEarn": "75900",
		"POLARGrpOne": "x",
		"POLARGrpOneIncluded": "x",
		"prAttBand": "x",
		"prAttIncluded": "x"
	},

	{
		"UKPRN": "10003270",
		"providerName": "Imperial College of Science Technology and Medicine",
		"Region": "London",
		"subject": "Computer science",
		"sex": "Female",
		"yearsAfterGraduation": "1",
		"grads": "60",
		"unmatched": "x",
		"matched": "x",
		"activityNotCaptured": "x",
		"noSustDest": "x",
		"sustEmpOnly": "x",
		"sustEmp": "x",
		"sustEmpFSorBoth": "x",
		"earningsInclude": "35",
		"lowerAnnEarn": "31500",
		"medianAnnEarn": "35000",
		"upperAnnEarn": "75900",
		"POLARGrpOne": "x",
		"POLARGrpOneIncluded": "x",
		"prAttBand": "x",
		"prAttIncluded": "x"
	},

	{
		"UKPRN": "10003270",
		"providerName": "Imperial College of Science Technology and Medicine",
		"Region": "London",
		"subject": "Computer science",
		"sex": "Female",
		"yearsAfterGraduation": "3",
		"grads": "60",
		"unmatched": "x",
		"matched": "x",
		"activityNotCaptured": "x",
		"noSustDest": "x",
		"sustEmpOnly": "x",
		"sustEmp": "x",
		"sustEmpFSorBoth": "x",
		"earningsInclude": "35",
		"lowerAnnEarn": "31500",
		"medianAnnEarn": "50100",
		"upperAnnEarn": "75900",
		"POLARGrpOne": "x",
		"POLARGrpOneIncluded": "x",
		"prAttBand": "x",
		"prAttIncluded": "x"
	},

	{
		"UKPRN": "10003270",
		"providerName": "Imperial College of Science Technology and Medicine",
		"Region": "London",
		"subject": "Computer science",
		"sex": "Female",
		"yearsAfterGraduation": "5",
		"grads": "60",
		"unmatched": "x",
		"matched": "x",
		"activityNotCaptured": "x",
		"noSustDest": "x",
		"sustEmpOnly": "x",
		"sustEmp": "x",
		"sustEmpFSorBoth": "x",
		"earningsInclude": "35",
		"lowerAnnEarn": "31500",
		"medianAnnEarn": "105000",
		"upperAnnEarn": "75900",
		"POLARGrpOne": "x",
		"POLARGrpOneIncluded": "x",
		"prAttBand": "x",
		"prAttIncluded": "x"
	}
]

var organiseByInstitution = function() {
    var list = {}
    jsonData.forEach(function(row) {
        list[row.providerName] = {"Male": {}, "Female": {}, "Both": {}};
    });

    jsonData.forEach(function(row) {
        list[row.providerName][row.sex][row.subject] = {"years": [], "earnings": []};
        list[row.providerName]["Both"][row.subject] = {"years": [], "earnings": []};
    });

    jsonData.forEach(function(row) {
        let access = list[row.providerName][row.sex][row.subject];
        access.years.push(parseInt(row.yearsAfterGraduation));
        access.earnings.push(parseInt(row.medianAnnEarn));
    });

    for (var ins in list) {
        let males = list[ins]["Male"];
        let females = list[ins]["Female"];
        let both = list[ins]["Both"];
        
        // for each subject in males...
        for (var subject in males) {
            for (let i = 0; i < males[subject].years.length; i++) {
                both[subject].years.push(males[subject].years[i]);
                both[subject].earnings.push((males[subject].earnings[i] + females[subject].earnings[i]) / 2);
            }
        }
    }

    return list;
}

export default organiseByInstitution;