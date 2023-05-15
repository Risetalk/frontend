import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  filterCourses: [],
  access: false,
};

export const Slice = createSlice({
  name: "courses",
  initialState,

  reducers: {
    loginAccess: (state, action) => {
      state.access = action.payload;
    },
    allCourses: (state, action) => {
      state.courses = action.payload;
      state.filterCourses = state.courses
    },
    filterCoursesCategory: (state, action) => {
      if (action.payload === "all") {
        state.filterCourses = state.courses
      } else {
        state.filterCourses = [...state.courses.filter(course => {

          return course.category === action.payload
        })]
      }
    },
    filterCoursesRaiting: (state, action) => {
      state.filterCourses = [...state.filterCourses.sort((a, b) => {
        if (action.payload === "min") {
          return a.raiting > b.raiting
        }
        else if (action.payload === "max") {
          return a.raiting < b.raiting
        }
      })
      ]
    },

    filterCoursesOrder: (state, action) => {
      state.filterCourses = [...state.filterCourses.sort((a, b) => {
        if (action.payload === "a-z") {
          return a.title > b.title
        }
        else if (action.payload === "z-a") {
          return a.title < b.title
        }
      })
      ]
    },

    filterCoursesLanguaje: (state, action) => {
      if (action.payload === "all") {
        state.filterCourses = state.courses
      } else {
        state.filterCourses = [...state.courses.filter(course => {

          return course.languaje === action.payload
        })]
      }
    },

  },
});

export const { allCourses, filterCoursesCategory, filterCoursesRaiting, filterCoursesOrder, filterCoursesLanguaje,loginAccess } = Slice.actions;
export default Slice.reducer;
