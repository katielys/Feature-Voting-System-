import axios from 'axios';

const API_URL = 'http://localhost:8000'; 
export const getFeatures = async () => {
  const response = await axios.get(`${API_URL}/features/`);
  return response.data;
};

export const submitFeature = async (feature) => {
  await axios.post(`${API_URL}/features/`, feature);
};

export const voteFeature = async (featureId) => {
  await axios.post(`${API_URL}/votes/`, { feature_id: featureId });
};
