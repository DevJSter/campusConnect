from pydantic import BaseModel
import pickle
from flask import Flask, request, jsonify

app = Flask(__name__)

rf = pickle.load(open('model/rf.pkl', 'rb'))

class ModelInput(BaseModel):
    Age: int
    CGPA: int
    Stream: int
    Certification: int
    Internships: int
    HistoryOfBacklogs: int
    Gender: int

@app.route('/placement_prediction', methods=['POST'])
def placement_pred():
    try:
        # Ensure the content type is application/json
        if request.headers['Content-Type'] != 'application/json':
            return jsonify({'error': 'Invalid Content-Type'}), 400

        # Parse JSON data
        input_parameters = ModelInput(**request.get_json())
    except Exception as e:
        return jsonify({'error': f'Invalid input: {str(e)}'}), 400

    input_list = [input_parameters.Age, input_parameters.CGPA, input_parameters.Stream,
                  input_parameters.Certification, input_parameters.Internships,
                  input_parameters.HistoryOfBacklogs, input_parameters.Gender]

    prediction = rf.predict([input_list])

    if prediction == 1:
        return jsonify({'Prediction': 'Placed'})
    else:
        return jsonify({'Prediction': 'Not Placed'})

if __name__ == '__main__':
    app.run(debug=True)
