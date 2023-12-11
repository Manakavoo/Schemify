"""
Uncomment one by one and run the file to generate the dataset.

This script is designed to create both accurate and fake datasets for testing and development purposes. Uncomment and run each section individually to generate the desired dataset.

Disclaimer: Ensure that you have reviewed and comply with the licensing terms and usage policies associated with any third-party libraries or data sources used in this script.

Author: Chiristo Selva Nimal

Instructions:
- Uncomment the relevant section(s) based on your dataset needs.
- Run the script to generate the dataset.

Note 1: This script may use third-party libraries or external data sources, and you are responsible for complying with their respective licenses and terms of use.
Note 2: This script is used to generate dataset for government schemes
"""

# starting of program
import pandas as pd
from faker import Faker
import random

fake = Faker()
num_rows = 2000

# segment wise
# 1. student 
# bc/mbc
# 3 schemes added
professions = ['student']
religions = ['hindu', 'muslim', 'christian','others']
communities = ['bc', 'mbc']
genders = ['male', 'female', 'others']
eligible_schemes = ['post-matric scholarship scheme', 'Free education scholarship for Professional Courses (Engineering, Medical, Agriculture, Veterinary and Law)', 'Scheme for Meritorious students to pursue Higher Secondary Education in the best schools of TamilNadu']
scheme_links = ['https://www.tn.gov.in/scheme/data_view/3200','https://www.tn.gov.in/scheme/data_view/27488', 'https://www.tn.gov.in/scheme/data_view/27514']

# sc/st
# 3
# professions = ['student']
# religions = ['hindu', 'muslim', 'christian','others']
# communities = ['sc']
# genders = ['male', 'female', 'others']
# eligible_schemes = ['Adi Dravidar and Tribal Welfare Department -Incentive / Award of Prizes - District Level Prize plus2 Examination Rs.3000/- 10th Std First prize Rs.1000/- Second Prize Rs.500/- Third Prize Rs.300/.', 'Adi Dravidar and Tribal Welfare Department -Scholarship - Free Education upto 12th Std. to all i.e. tuition fee will not be collected and the amount will be reimbursed by Government.', 'Adi Dravidar and Tribal Welfare Department -Hostels - Special Guides']
# scheme_links = ['https://www.tn.gov.in/scheme/data_view/83082', 'https://www.tn.gov.in/scheme/data_view/83084', 'https://www.tn.gov.in/scheme/data_view/83078']


# farmer
# 4
# professions = ['farmer']
# religions = ['hindu', 'muslim', 'christian','others']
# communities = ['bc', 'mbc', 'oc', 'sc', 'others']
# genders = ['male', 'female', 'others']
# eligible_schemes = ['distribution of certified seeds of maize scheme','Farm Production System and micro enterprises - Sponsored By State Govt', 'Pipes carrying water from source to field scheme', 'Micro Nutrient spray scheme']
# scheme_links= ['https://www.tn.gov.in/scheme/data_view/6853', 'https://www.tn.gov.in/scheme/data_view/19617', 'https://www.tn.gov.in/scheme/data_view/6859', 'https://www.tn.gov.in/scheme/data_view/7084']

# government employee
# 1
# professions = ['government employee']
# religions = ['hindu', 'muslim', 'christian','others']
# communities = ['bc', 'mbc', 'oc', 'sc', 'others']
# genders = ['male', 'female', 'others']
# eligible_schemes = ['new health insurance scheme']
# scheme_links = ['https://www.tn.gov.in/scheme/data_view/6787']

# unemployed
# 3
# professions = ['unemployed']
# religions = ['hindu']
# communities = ['sc']
# genders = ['male', 'female', 'others']
# eligible_schemes = ['award of rs.20,000/- to best writers scheme','Afforestation schemes providing incentives and providing employment in Forest Operation.', 'Assistance to Lawyers for Starting their Practice scheme' ]
# scheme_links = ['https://www.tn.gov.in/scheme/data_view/83092','https://www.tn.gov.in/scheme/data_view/83087', 'https://www.tn.gov.in/scheme/data_view/83091']

# sports person
# 3
# professions = ['sports person']
# religions = ['hindu', 'muslim', 'christian','others']
# communities = ['bc', 'mbc', 'oc', 'sc', 'others']
# genders = ['male', 'female', 'others']
# eligible_schemes = ['youth welfare and sports development department - outstanding sports persons', 'Youth Welfare and Sports Development Department - CHIEF MINISTER STATE SPORTS AWARD', 'Youth Welfare and Sports Development Department - National Cadet Crops Certificate holders']
# scheme_links = ['https://www.tn.gov.in/scheme/data_view/3389','https://www.tn.gov.in/scheme/data_view/3393', 'https://www.tn.gov.in/scheme/data_view/3406']

# widow
# 4
# professions = ['widow']
# religions = ['hindu', 'muslim', 'christian','others']
# communities = ['bc', 'mbc', 'oc', 'sc', 'others']
# genders = ['female']
# eligible_schemes = ['destitute widow pension scheme', 'journalists family pension', 'District central Cooperative Banks and through its branches - For Maternity Loan through Self help groups', 'Issue of certificate - Certificates of destitute for admission in Orphanages']
# scheme_links = ['https://www.tn.gov.in/scheme/data_view/3455','https://www.tn.gov.in/scheme/data_view/6802','https://www.tn.gov.in/scheme/data_view/3578', 'https://www.tn.gov.in/scheme/data_view/3312']


# Generate synthetic data
data = {
    'age': [random.randint(25, 60) for _ in range(num_rows)],
    'religion': [random.choice(religions) for _ in range(num_rows)],
    'community': [random.choice(communities) for _ in range(num_rows)],
    'income': [random.randint(500, 2000)*1000 for _ in range(num_rows)],
    'gender': [random.choice(genders) for _ in range(num_rows)],
    'segment': [random.choice(professions) for _ in range(num_rows)],
    'scheme': [eligible_schemes for _ in range(num_rows)],
    'link': [scheme_links for _ in range(num_rows)]
}

df = pd.DataFrame(data)
df.to_csv('governmentEmployeeSchemes.csv', index=False)
