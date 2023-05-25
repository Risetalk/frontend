import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
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
  id: "",
  course: {},
  my_cart: [{
    id: 1,
    title: 'Dart for beginners',
    price: 150,
    background_image: 'https://th.bing.com/th/id/OIP._h8M3yKatoZqqd37GH3wNgHaEK?pid=ImgDet&rs=1',
    description: 'This is a beginner guide to be a dart developer'
  }]
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
        state.filterCourses = state.courses;
      } else {
        state.filterCourses = [
          ...state.courses.filter((course) => {
            return course.category === action.payload;
          }),
        ];
      }
    },
    filterCoursesRaiting: (state, action) => {
      state.filterCourses = [
        ...state.filterCourses.sort((a, b) => {
          if (action.payload === "min") {
            return a.raiting > b.raiting;
          } else if (action.payload === "max") {
            return a.raiting < b.raiting;
          }
        }),
      ];
    },

    filterCoursesOrder: (state, action) => {
      state.filterCourses = [
        ...state.filterCourses.sort((a, b) => {
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
        state.filterCourses = state.courses;
      } else {
        state.filterCourses = [
          ...state.courses.filter((course) => {
            return course.languaje === action.payload;
          }),
        ];
      }
    },

    searchCourses: (state, action) => {
      state.filterCourses = state.courses.filter((course) => {
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
    // createVideo:(state,action) =>{
    //   state.createCourse.lessons.videos = (state.createCourse.lessons.videos) ?
    //   [...state.createCourse.lessons.videos, action.payload]
    //   : [action.payload]
    // }
    createVideo: (state, action) => {
      console.log(action.payload);
      const {titleLesson, videoData} = action.payload

      console.log(titleLesson,videoData);

      state.course.lessons.forEach(lesson => {
          if(lesson.title === titleLesson){
            lesson.videos.push(videoData)
          }
      });
      // const { title, videoData } = action.payload;
      // console.log(`esto es el titulo de la lesson${title}`);
      // console.log(`esto es la data del video ${videoData}`);


      // Encuentra la lección en el array de lecciones
    //   const lessonIndex = state.createCourse.lessons.findIndex((l) => l.title === titleLesson);
    
    //   if (lessonIndex !== -1) {
    //     // Crea una copia del estado mutable
    //     console.log(lessonIndex);
    // }
  },
}
});

export const {
  addUser,
  allCourses,
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
  getMyCategories,
  getCoursesRecommended,
  addId,
  postCreateCourse,
  createLesson,
  createVideo
} = Slice.actions;
export default Slice.reducer;
