import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

export const Slice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    allCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { allCourses } = Slice.actions;
export default Slice.reducer;
