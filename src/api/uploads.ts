import axios from "axios";
// import type { Uploads } from "../interfaces/upload";

const API_URL = import.meta.env.VITE_API_URL as string;

// export const uploads = async (data: Uploads) => {
//   const response = await axios.post(`${API_URL}/upload`, data);
//   console.log(response, "respUpload");
//   return response.data;
// };

export const uploads = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
