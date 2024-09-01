import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCamper = async (filters = {}) => {
  try {
    const response = await axios.get("/campers", { params: filters });
    return response.data;
  } catch (error) {
    console.error("Error fetching campers:", error);
    throw error;
  }
};

export const detailsCamper = async (id) => {
  const response = await axios.get(`/campers/${id}`);

  return response.data;
};
