import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:[],
  courses: [],
  coursesCard: [],
  coursesCardRecommend: [],
  coursesCardChoice: [],
  coursesCardDevelop: [],
  coursesCardStudents: [],
  filterCourses: [],
  myCourses: [],
  coursesBuy: [],
  myCategories: [],
  coursesRecommend: [],
  access: true,
  reset: false,
};

export const Slice = createSlice({
  name: "courses",
  initialState,

  reducers: {
    addUser:(state,action)=>{
      state.user = action.payload;
    },
    loginAccess: (state, action) => {
      state.access = action.payload;
    },
    allCourses: (state, action) => {
      state.courses = action.payload;

    },

    allMyCourses: (state, action) => {
      state.myCourses = state.courses.filter(course => {
        return course.buy === true
      })
    },
    allBuyCourses: (state, action) => {
      state.coursesBuy = state.courses.filter(course => {
        return course.buy === false
      })
      state.filterCourses = [...state.coursesBuy]
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

    searchCourses: (state, action) => {
      state.filterCourses = state.courses.filter(course => {
        return course.title.toLowerCase().includes(action.payload)
      })
    },

    resetPage: (state, action) => {
      if (state.reset) { state.reset = false } else { state.reset = true }

    },
    getMyCategories: (state, action) => {
      let categoriesSet = new Set();
      for (const course of state.myCourses) {
        categoriesSet.add(course.category)
      }
      state.myCategories = [...categoriesSet]
    },

    getCoursesRecommended: (state, action) => {
      for (const course of state.coursesBuy) {
        state.myCategories.includes(course.category) && state.coursesRecommend.push(course)
      }
    },

    getCoursesCard: (state, action) => {
        state.coursesCardRecommend = state.coursesBuy.filter( course => {
          if(state.myCategories.includes(course.category)) return course
          
        })

        state.coursesCardChoice = [...state.coursesBuy];
        
        state.coursesCardDevelop = state.coursesBuy.filter(course=>{
          if(course.category === "Development")return course
        }
      )

        state.coursesCardStudents = [...state.coursesBuy.sort((a, b) => {        
            return a.raiting < b.raiting
        })
        ]
        // for (const course of state.coursesBuy) {
        //   state.myCategories.includes(course.category) && state.coursesCardRecommend.push(course)
        // }
      // } else if (action.payload === "The course in personal development") {
      //   for (const course of state.coursesBuy) {
      //     course.category === "Development" && state.coursesCardDevelop.push(course)
      //   }
      // } else {
      //   for (const course of state.coursesBuy) {
      //     state.coursesCard.push(course)
      //   }
      // }
    },



  },
});

export const { addUser, allCourses, getCoursesCard, allMyCourses, allBuyCourses, filterCoursesCategory, filterCoursesRaiting, filterCoursesOrder, filterCoursesLanguaje, loginAccess, searchCourses, resetPage, getMyCategories, getCoursesRecommended } = Slice.actions;
export default Slice.reducer;
