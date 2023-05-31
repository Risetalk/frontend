import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  coursesDB:[],
  filterCoursesDB:[],
  courses: [],
  categories:[],
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
  postUser: [],
  access: true,
  reset: false,
  id: "",
  totalPay:"",
  course: {},
  my_cart: [],
  loggedIn: false,
  user: null,
};

export const Slice = createSlice({
  name: "courses",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addId: (state, action) => {
      state.id = action.payload;
    },
    loginAccess: (state, action) => {
      state.access = action.payload;
    },
    allCourses: (state, action) => {
      state.courses = action.payload;
    },
    allCoursesDB: (state,action)=>{
      state.coursesDB = action.payload;
      state.filterCoursesDB = action.payload;
    },

    allMyCourses: (state, action) => {
      state.myCourses = state.courses.filter((course) => {
        return course.buy === true;
      });
    },
    allBuyCourses: (state, action) => {
      state.coursesBuy = state.courses.filter((course) => {
        return course.buy === false;
      });
      state.filterCourses = [...state.coursesBuy];
    },
    filterCoursesCategory: (state, action) => {
      if (action.payload === "all") {
        state.filterCoursesDB = state.coursesDB;
      } else {
        state.filterCoursesDB = [
          ...state.coursesDB.filter((course) => {
            return course.categoryId === action.payload;
          }),
        ];
      }
    },
    filterCoursesRaiting: (state, action) => {
      state.filterCoursesDB = [
        ...state.filterCoursesDB.sort((a, b) => {
          if (action.payload === "min") {
            return a.raiting > b.raiting;
          } else if (action.payload === "max") {
            return a.raiting < b.raiting;
          }
        }),
      ];
    },

    filterCoursesOrder: (state, action) => {
      state.filterCoursesDB = [
        ...state.coursesDB.sort((a, b) => {
          if (action.payload === "a-z") {
            return a.title > b.title;
          } else if (action.payload === "z-a") {
            return a.title < b.title;
          }
        }),
      ];
    },

    filterCoursesLanguaje: (state, action) => {
      if (action.payload === "all") {
        state.filterCoursesDB = state.coursesDB;
      } else {
        state.filterCoursesDB = [
          ...state.coursesDB.filter((course) => {
            return course.language === action.payload;
          }),
        ];
      }
    },

    searchCourses: (state, action) => {
      state.filterCoursesDB = state.coursesDB.filter((course) => {
        return course.title.toLowerCase().includes(action.payload);
      });
    },

    resetPage: (state, action) => {
      if (state.reset) {
        state.reset = false;
      } else {
        state.reset = true;
      }
    },
    getCategories: (state,action) =>{
      state.categories = action.payload
    },
    getMyCategories: (state, action) => {
      let categoriesSet = new Set();
      for (const course of state.myCourses) {
        categoriesSet.add(course.category);
      }
      state.myCategories = [...categoriesSet];
    },

    getCoursesRecommended: (state, action) => {
      for (const course of state.coursesBuy) {
        state.myCategories.includes(course.category) &&
          state.coursesRecommend.push(course);
      }
    },

    getCoursesCard: (state, action) => {
      state.coursesCardRecommend = state.coursesBuy.filter((course) => {
        if (state.myCategories.includes(course.category)) return course;
      });

      state.coursesCardChoice = [...state.coursesBuy];

      state.coursesCardDevelop = state.coursesBuy.filter((course) => {
        if (course.category === "Development") return course;
      });

      state.coursesCardStudents = [
        ...state.coursesBuy.sort((a, b) => {
          return a.raiting < b.raiting;
        }),
      ];
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

    postCreateCourse: (state, action) => {
      state.course = action.payload;
    },
    createLesson: (state, action) => {
      state.course.lessons = (state.course.lessons) ?
          [...state.course.lessons, action.payload]
          : [action.payload
          ]
      // state.createCourse = {
      //   ...state.createCourse,
      //   lessons: (state.createCourse.lessons) ?
      //     [...state.createCourse.lessons, action.payload]
      //     : [action.payload
      //     ]
      // }
    },

    createVideo: (state, action) => {
      const {titleLesson, videoData} = action.payload
;
      state.course.lessons.forEach(lesson => {
          if(lesson.title === titleLesson){
            lesson.videos.push(videoData)
          }
      });
  },

  loginSuccess: (state, action) => {
    state.loggedIn = true;
    state.user = action.payload;
  },
  logoutSuccess: (state) => {
    state.loggedIn = false;
    state.user = null;
  },

  addMyCart: (state,action) =>{
    state.my_cart = [...state.my_cart,action.payload];
  },

  addPay: (state,action) => {
    state.totalPay = action.payload;
  },
  setPostUser: (state, action) =>{
    state.postUser = action.payload
  }
  
}


});

export const {
  addUser,
  addMyCart,
  allCourses,
  allCoursesDB,
  getCoursesCard,
  allMyCourses,
  allBuyCourses,
  filterCoursesCategory,
  filterCoursesRaiting,
  filterCoursesOrder,
  filterCoursesLanguaje,
  loginAccess,
  searchCourses,
  resetPage,
  getCategories,
  getMyCategories,
  getCoursesRecommended,
  addId,
  postCreateCourse,
  createLesson,
  createVideo,
  loginSuccess, logoutSuccess,
  addPay,
  setPostUser
} = Slice.actions;
export default Slice.reducer;
