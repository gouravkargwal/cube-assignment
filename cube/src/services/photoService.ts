import api from "../api/axiosInstance";

const API_KEY = import.meta.env.VITE_APP_PHOTO_API_KEY;

export const fetchPhotos = async (photoCount: number) => {
  try {    
    const response = await api.get("/", {
      params: {
        key: API_KEY,
        per_page: photoCount,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch photos.");
  }
};
