import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    Age: 20,
    Gender: 1,
    Stream: 1,
    Internships: 1,
    CGPA: 8,
    Certification: 4,
    HistoryOfBacklogs: 1
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://d3d6-35-184-57-221.ngrok.io/placement_prediction',
        formData
      );

      console.log('Prediction Result:', response.data);
      // Handle the prediction result as needed
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Prediction Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="number"
            name="Gender"
            value={formData.Gender}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Stream:
          <input
            type="string"
            name="Age"
            value={formData.Stream}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Internships:
          <input
            type="number"
            name="Internships"
            value={formData.Internships}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CGPA:
          <input
            type="number"
            name="CGPA"
            value={formData.CGPA}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Certification:
          <input
            type="number"
            name="Certification"
            value={formData.Certification}
            onChange={handleInputChange}
          />
        </label>
        <label>
          HistoryOfBacklogs:
          <input
            type="number"
            name="HistoryOfBacklogs"
            value={formData.HistoryOfBacklogs}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default PredictionForm;