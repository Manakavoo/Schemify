"""
Disclaimer: Ensure that you have reviewed and comply with the licensing terms and usage policies associated with any third-party libraries or data sources used in this script.
Author: Chiristo Selva Nimal

"""

import json
from flask import Flask, render_template, request, jsonify
import random
import joblib
import numpy as np
import warnings


model = joblib.load("./model/model.joblib")
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")

app = Flask(__name__)

# opening intents.json for normal response generation
with open('./data/intents.json', 'r') as file:
    intents = json.load(file)


# methods
def dict_to_feature(survey_responses):
    default_values = {
        'age': 0,
        'income': 0,
        'religion_christian': 0,
        'religion_hindu': 0,
        'religion_muslim': 0,
        'religion_others': 0,
        'community_bc': 0,
        'community_mbc': 0,
        'community_oc': 0,
        'community_others': 0,
        'community_sc': 0,
        'gender_female': 0,
        'gender_male': 0,
        'gender_others': 0,
        'segment_farmer': 0,
        'segment_governmentemployee': 0,
        'segment_sportsperson': 0,
        'segment_student': 0,
        'segment_unemployed': 0,
        'segment_widow': 0,
    }

    for key, value in survey_responses.items():
        if key == 'religion':
            if value.lower() == 'christian':
                default_values['religion_christian'] = 1
            elif value.lower() == 'hindu':
                default_values['religion_hindu'] = 1
            elif value.lower() == 'muslim':
                default_values['religion_muslim'] = 1
            else:
                default_values['religion_others'] = 1
        elif key == 'community':
            if value.lower() == 'bc':
                default_values['community_bc'] = 1
            elif value.lower() == 'mbc':
                default_values['community_mbc'] = 1
            elif value.lower() == 'oc':
                default_values['community_oc'] = 1
            elif value.lower() == 'sc' or value.lower() == 'st':
                default_values['community_sc'] = 1
            else:
                default_values['community_others'] = 1
        elif key == 'gender':
            if value.lower() == 'male':
                default_values['gender_male'] = 1
            elif value.lower() == 'female':
                default_values['gender_female'] = 1
            else:
                default_values['gender_others'] = 1
        elif key == 'segment':
            if value.lower() == 'student':
                default_values['segment_student'] = 1
            elif value.lower() == 'farmer':
                default_values['segment_farmer'] = 1
            elif value.lower() == 'government employee':
                default_values['segment_governmentemployee'] = 1
            elif value.lower() == 'sports person':
                default_values['segment_sportsperson'] = 1
            elif value.lower() == 'unemployed':
                default_values['segment_unemployed'] = 1
            elif value.lower() == 'widow' or value.lower() == 'destitute women':
                default_values['segment_widow'] = 1
            else: 
                default_values['segment_others'] = 1
        else:
            default_values[key] = value

    features = [
        default_values['age'],
        default_values['income'],
        default_values['religion_christian'],
        default_values['religion_hindu'],
        default_values['religion_muslim'],
        default_values['religion_others'],
        default_values['community_bc'],
        default_values['community_mbc'],
        default_values['community_oc'],
        default_values['community_others'],
        default_values['community_sc'],
        default_values['gender_female'],
        default_values['gender_male'],
        default_values['gender_others'],
        default_values['segment_farmer'],
        default_values['segment_governmentemployee'],
        default_values['segment_sportsperson'],
        default_values['segment_student'],
        default_values['segment_unemployed'],
        default_values['segment_widow'],
    ]
    return features

 
def make_prediction(survey_responses):
    try:
        features = dict_to_feature(survey_responses)
        prediction = model.predict([features])

        prediction_list = prediction.tolist() if isinstance(prediction, np.ndarray) else [prediction]
        return prediction_list
    except Exception as e:
        print(f"Prediction error: {str(e)}")
        return None


def determine_intent(user_input):
    for intent in intents['intents']:
        for pattern in intent['patterns']:
            if(len(user_input)>len(pattern)):
                if pattern in user_input.lower():
                    return intent['tag']
            else:
                if(user_input.lower() in pattern):
                    return intent['tag']

    return 'fallback'

def generate_response(intent):
    for i in intents['intents']:
        if i['tag'] == intent:
            return random.choice(i['responses'])


# chat routes
@app.route('/get_survey')
def generate_survey():
    global survey_responses, options
    if 'options' not in globals():
        options = []
    message = request.args.get('msg')
    try:
        if(message == '/start'):
            survey_responses = {}
            return jsonify({'process': True,'type': "complex", 'response': {"reply": "Please answer the following survey for personalised scheme recommendations.", "options": ["What is your age? eg. 1, 18, 33, etc.,"]}})
        
        elif 'age' not in survey_responses:
            if message is not None:
                try:
                    age = int(message)
                    if age < 0 or age > 120:
                        raise ValueError("Age must be a valid number.")
                    survey_responses['age'] = age
                    print(survey_responses)
                    return jsonify({'process': True,'type': "complex", 'response': {"reply": "Thank you for your coordination! What is your Religion? enter the number alone", "options": ["hindu", "muslim", "christian", "others"]}})
                except ValueError:
                    return jsonify({'process': True,'type': "simple", 'response': "Please provide a valid positive integer for the age question."})
        
        elif 'religion' not in survey_responses:
            if message is not None:
                try:
                    option = int(message)
                    if option <= 0  or option > 4:
                        raise ValueError("Enter a valid number")
                    
                    match option:
                        case 1:
                            survey_responses['religion'] = "hindu"
                        case 2: 
                            survey_responses['religion'] = "muslim"
                        case 3:
                            survey_responses['religion'] = "christian"
                        case default:
                            survey_responses['religion'] = "others"
                    print(survey_responses)
                    return jsonify({'process': True,'type': "complex", 'response': {"reply": "Things going well :) What is your community? enter the number alone", "options": ["bc", "mbc", "oc", "sc/st", "others"]}})
                except ValueError:
                    return jsonify({'process': True,'type': "simple", 'response': "Please provide a valid positive number"})   
            else:
                return jsonify({'process': True,'type': "simple", 'response': "Please provide a response for the religion question."})
            
        elif 'community' not in survey_responses:
            if message is not None:
                try:
                    option = int(message)
                    if option <= 0 or option > 5:
                        raise ValueError("Enter a valid number")
                    
                    match option:
                        case 1:
                            survey_responses['community'] = "bc"
                        case 2: 
                            survey_responses['community'] = "mbc"
                        case 3:
                            survey_responses['community'] = "oc"
                        case 4:
                            survey_responses['community'] = "sc"
                        case default:
                            survey_responses['community'] = "others"
                    print(survey_responses)
                    return jsonify({'process': True,'type': "simple", 'response': "Ok, Next What is your family annual income?"})
                except ValueError:
                    return jsonify({'process': True,'type': "simple", 'response': "Please provide a valid positive number"})   
            else:
                return jsonify({'process': True,'type': "simple", 'response': "Please provide a response for the community question."})
            
        elif 'income' not in survey_responses:
            if message is not None:
                try:
                    income = float(message)
                    if(income < 0):
                        raise ValueError("Income must be a positive number.")

                    survey_responses['income'] = income
                    print(survey_responses)
                    return jsonify({'process': True,'type': "complex", 'response': {"reply": "Thanks! what is your gender? enter the number", "options": ["male", "female", "others"]}})
                except ValueError:
                    return jsonify({'process': True,'type': "simple", 'response': "Enter a valid annual income"})
            else:
                return jsonify({'process': True,'type': "simple", 'response': "Please provide a response for the income question."})
        
        elif 'gender' not in survey_responses:
            if message is not None:
                try:
                    option = int(message)
                    if option <= 0 or option > 3:
                        raise ValueError("Enter a valid number")
                    match option:
                        case 1:
                            survey_responses['gender'] = "male"
                        case 2: 
                            survey_responses['gender'] = "female"
                        case default:
                            survey_responses['gender'] = "others"
                    print(survey_responses)

                    gender_option = survey_responses.get('gender', '').lower()
                    age_option = survey_responses.get('age', 0)

                    options = []

                    if gender_option == 'male':
                        options = ["Student", "Farmer", "Government Employee", "Sports person", "Unemployed", "Others"]
                        if age_option <= 18:
                            options = [opt for opt in options if opt not in ["Farmer", "Government Employee"]]
                        elif age_option > 24:
                            options = [opt for opt in options if opt != "Student"]
                        options = [opt for opt in options if opt != "Widow/Destitute women"]
                    elif gender_option == 'female':
                        options = ["Student", "Farmer", "Government Employee", "Sports person", "Unemployed", "Widow/Destitute women", "Others"]
                        if age_option <= 18:
                            options = [opt for opt in options if opt not in ["Farmer", "Widow/Destitute women", "Government Employee"]]
                        elif age_option > 24:
                            options = [opt for opt in options if opt != "Student"]
                    else:  
                        options = ["Student", "Farmer", "Government Employee", "Sports person", "Unemployed", "Widow/Destitute women", "Others"]
                        if age_option <= 18:
                            options = [opt for opt in options if opt not in ["Farmer", "Government Employee", "Widow/Destitute women"]]
                        elif age_option > 24:
                            options = [opt for opt in options if opt != "Student"]

                    
                    return jsonify({'process': True,'type': "complex", 'response': {"reply": "Got it!, What is your beneficiary segment? enter the number", "options": options}})
                except ValueError:
                    return jsonify({'process': True,'type': "simple", 'response': "Please provide a valid positive number"})   
            else:
                return jsonify({'process': True,'type': "simple", 'response': "Please provide a response for the religion question."})
        
        elif 'segment' not in survey_responses:
            if message is not None:
                try:
                    option = int(message)
                    if option <= 0 or option > len(options):
                        raise ValueError("Enter a valid number")
                    
                    if(options[option-1] == "Widow/Destitute women"):
                        survey_responses['segment'] = "widow"
                    else:
                        survey_responses['segment'] = options[option-1].lower()

                    print(survey_responses)

                    prediction = make_prediction(survey_responses)
                    print(prediction)
                    return jsonify({'process': False,'type': "result", 'response': { 'reply': "According to our database. The scheme/(s) you might be eligible is/are", 'schemes': prediction[0]}})
                except ValueError:
                    return jsonify({'process': True,'type': "simple", 'response': "Please provide a valid positive number"})   
            else:
                return jsonify({'process': True,'type': "simple", 'response': "Please provide a response for the beneficiary segment question."})  
    except Exception as e:
            return jsonify({'process': False,'type': "simple", 'response': "Error occured while conducting the survey. Please enter /start to start the survey again"})
    

@app.route('/get_response')
def get_response():
    message = request.args.get('msg')
    intent = determine_intent(message)
    response = generate_response(intent)

    return jsonify({'process': False, 'response': response})

# index page route
@app.route('/')
def index():
    return render_template('index.html')


# main function
if __name__ == "__main__":
    app.run(debug=True)