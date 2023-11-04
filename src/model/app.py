from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the saved machine learning model
model = joblib.load("rf.pkl")

@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.get_json()
    input_data = [data["Age"], data["Gender"], data["Stream"], data["Internships"], data["CGPA"], data["Certification"], data["HistoryOfBacklogs"]]
    prediction = model.predict([input_data])[0]
    return jsonify({"placement": bool(prediction)})

if __name__ == "__main__":
    app.run(debug=True)
