import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile
import numpy as np

# importing data -> pull from website does work
data = pd.read_csv('https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/619435/SFR18_2017_Institution_subject_data.csv', low_memory=False)
df = pd.DataFrame(data, columns = ['providerName','subject','yearsAfterGraduation','lowerAnnEarn','medianAnnEarn','upperAnnEarn'])

#INPUT VARIABLES = case sensetive!
Institution_Name ="University of Oxford"
Degree ="Computer science"

#restricting to specific subject
SubjectConstraint = df['subject']

#restricting to specific university
UniConstraint = SubjectConstraint[df['providerName']].str.contains(Institution_Name)

"""
#LOWER QUARTILE AVERAGE WAGE BETWEEN GRADUATES WITH 0-5 YEARS EXPERIENCE
QuartileLow = UniConstraint['lowerAnnEarn']
QuartileLow = pd.DataFrame(QuartileLow)
QuartileLow = QuartileLow[QuartileLow.lowerAnnEarn != 'x'].astype(int)
QuartileLowAvg = np.mean(QuartileLow)
#MEDIAN WAGE BETWEEN GRADUATES WITH 0-5 YEARS EXPERIENCE
QuartileMed = UniConstraint['medianAnnEarn']
QuartileMed = pd.DataFrame(QuartileMed)
QuartileMed = QuartileMed[QuartileMed.medianAnnEarn != 'x'].astype(int)
QuartileMedAvg = np.mean(QuartileMed)

#UPPER QUARTILE WAGE BETWEEN GRADUATES WITH 0-5 YEARS EXPERIENCE
QuartileUp = UniConstraint['upperAnnEarn']
QuartileUp = pd.DataFrame(QuartileUp)
QuartileUp = QuartileUp[QuartileUp.upperAnnEarn != 'x'].astype(int)
QuartileUpAvg = np.mean(QuartileUp)

#dictionary
earningsDictionary = dict(LowerQuartile =QuartileLowAvg,Median=QuartileMedAvg,UpperQuartile=QuartileUpAvg)
print(earningsDictionary)
"""
