import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";
import PublicHabits from "../pages/PublicHabits";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/Add_Habit',
            element: <PrivateRoute><AddHabit/></PrivateRoute>,
        },
        {
            path: '/My_Habits',
            element: <PrivateRoute><MyHabits/></PrivateRoute>,
        },
        {
            path: '/Public_Habits',
            element: <PublicHabits/>,
        },
        {
        path: '/signIn-page',
       element: <SignIn/>,
      },
      {
        path: '/signUp-page',
       element: <SignUp/>,
      },
    ]
  },
]);