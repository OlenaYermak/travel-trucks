// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchCampers",
//   async (filters = {}, { rejectWithValue }) => {
//     try {
//       console.log("Запит до API для отримання кемперів із фільтрами:", filters);
//       const response = await axios.get(
//         "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
//         { params: filters }
//       );

//       if (!Array.isArray(response.data)) {
//         console.error(
//           "Помилка: API повернув не масив. Отримано:",
//           response.data
//         );
//         throw new Error(
//           "Invalid response format: expected an array of campers."
//         );
//       }

//       console.log("Дані успішно отримані від API:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Помилка під час запиту до API:", error.message);
//       return rejectWithValue(error.message);
//     }
//   }
// );
