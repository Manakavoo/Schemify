

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "http://localhost:3001"}})

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    # Process the user's message and generate the bot's response
    bot_response = generate_response(user_message)
    print("user : ",user_message)
    return jsonify({'response': bot_response})

# ...


def generate_response(user_message):
    # Implement your logic to generate the bot's response
    # based on the user's message
    return "This is a sample response from the bot."

if __name__ == '__main__':
    app.run(debug=True)