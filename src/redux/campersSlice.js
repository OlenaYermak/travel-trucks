// import { createSlice } from "@reduxjs/toolkit";
// import { fetchCampers } from "./campersOperations.js";

// const initialState = {
//   items: [],
//   filters: {},
//   selected: [],
//   status: "idle",
//   error: null,
// };

// const camperSlice = createSlice({
//   name: "campers",
//   initialState,
//   reducers: {
//     setFilters: (state, action) => {
//       console.log("Фільтри встановлені:", action.payload);
//       state.filters = action.payload;
//     },
//     toggleSelect: (state, action) => {
//       const camperId = action.payload;
//       console.log(
//         `Кемпер ${camperId} переключений (обраний/знятий з обраних).`
//       );
//       if (state.selected.includes(camperId)) {
//         state.selected = state.selected.filter((id) => id !== camperId);
//       } else {
//         state.selected.push(camperId);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCampers.pending, (state) => {
//         console.log("Завантаження кемперів розпочато...");
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         console.log("Завантаження кемперів завершено успішно:", action.payload);
//         state.status = "succeeded";
//         state.items = action.payload || [];
//       })
//       .addCase(fetchCampers.rejected, (state, action) => {
//         console.error(
//           "Завантаження кемперів не вдалося:",
//           action.error.message
//         );
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setFilters, toggleSelect } = camperSlice.actions;
// export default camperSlice.reducer;
