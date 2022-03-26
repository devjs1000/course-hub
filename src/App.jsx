import { useState, useEffect, lazy, Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import useStore from './context/useStore'

import {
  CreateAssignment,
  CreateCourse,
  CreateQuiz,
  Footer,
  Courses,
  PrivateRoute,
} from "./components";

import {
  Profile,
  Dashboard,
  MyCourses,
  Assignments,
  Notifications,
  Settings,
} from "./components/profile";

import Community from "./components/Community/Community";
import { Home, CourseDetails, NotFound } from "./pages";
import { Login, Signup } from "./components/Auth";

import Navbar from "./components/header/Navbar";
import Loading from "./UI/BoxLoading";
import Contact from "./components/ContactUs/ContactUs";
import About from "./components/AboutUs/AboutUs";
import AllCourses from "./components/courses/AllCourses";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  let stylesForProfile = 'bg-red-800'
  useEffect(() => {
    // const qry=`
    // query Query{
    // 	users{
    // 		id
    // 		name
    // 	}
    // }
    // `
    //  axios.post('https://xciteserver.herokuapp.com/xcite', {query:qry}).then(res=>{
    // 	console.log(res);
    //  })

    const queryMutation = `
mutation CreateQuestion($courseId: String!, $userId: String!, $question: String!) {
  createQuestion(courseId: $courseId, userId: $userId, question: $question) {
    id
    courseId
    userId
    question
  }
}`;

    axios
      .post("https://xciteserver.herokuapp.com/xcite", {
        query: queryMutation,
        variables: {
          courseId: "621a25a9b0f96bf78296172f",
          userId: "62193d9f3c9111dffd05791b",
          question: "what is gql?",
        },
      })
      .then((res) => {});

    setTimeout(() => setLoading(false), 1500);
  }, []);

//18 Mar 2022 - added Global Context from ThemeContext
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/all-courses" element={<AllCourses />} />
              <Route
                path="/my-profile"
                element={
                  <PrivateRoute className="text-7xl ">
                    <Profile />
                  </PrivateRoute>
                }
              >
                <Route path="/my-profile/dashboard" element={<Dashboard />} />
                <Route path="/my-profile/courses" element={<MyCourses />} />
                <Route
                  path="/my-profile/assignments"
                  element={<Assignments />}
                />
                <Route
                  path="/my-profile/notifications"
                  element={<Notifications />}
                />
                <Route path="/my-profile/settings" element={<Settings />} />
              </Route>
              {/* <Route path="/my-courses" element={<MyCourses />} /> */}

              <Route path="/Community" element={<Community />} />
              <Route path="/create-course" element={<CreateCourse />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/create-assignment" element={<CreateAssignment />} />

              <Route path="/*" element={<NotFound />} />

              <Route
                path="all-courses/coursedetails/:id"
                element={<CourseDetails />}
              />
              <Route
                path="my-profile/courses/coursedetails/:id"
                element={<CourseDetails />}
              />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
