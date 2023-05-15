import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  filterCourses: [],
  access: false,
  reset: false,
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

    searchCourses:(state, action) => {
      state.filterCourses = state.courses.filter(course=> {
        return course.title.toLowerCase().includes(action.payload)})
    },

    resetPage:(state, action)=>{
      if(state.reset){state.reset = false}else{state.reset = true}
      
    }

  },
});

export const { allCourses, filterCoursesCategory, filterCoursesRaiting, filterCoursesOrder, filterCoursesLanguaje,loginAccess, searchCourses, resetPage } = Slice.actions;
export default Slice.reducer;
