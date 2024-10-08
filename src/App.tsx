import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import ChangePass from "./modules/Auth/components/ChangePass/ChangePass";
import ForgetPass from "./modules/Auth/components/ForgetPass/ForgetPass";
import Login from "./modules/Auth/components/Login/Login";
import Register from "./modules/Auth/components/Register/Register";
import ResetPass from "./modules/Auth/components/ResetPass/ResetPass";
import VerifyAccount from "./modules/Auth/components/VerifyAccount/VerifyAccount";
import Dashboard from "./modules/Dashboard/components/Dashboard";
import ProjectData from "./modules/Projects/components/ProjectData/ProjectData";
import ProjectsList from "./modules/Projects/components/ProjectsList/ProjectsList";
import AuthLayout from "./modules/Shared/components/AuthLayout/AuthLayout";
import MasterLayout from "./modules/Shared/components/MasterLayout/MasterLayout";
import NotFound from "./modules/Shared/components/NotFound/NotFound";
import TaskData from "./modules/Tasks/components/TaskData/TaskData";
import TasksList from "./modules/Tasks/components/TasksList/TasksList";
import UsersList from "./modules/Users/components/UsersList/UsersList";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProtectedRoute } from "./modules/Shared/components/ProtectedRoute/ProtectedRoute";
import UpdateProject from "./modules/Projects/components/UpdateProject/UpdateFormProject";
import AddProject from "./modules/Projects/components/AddProject.tsx/AddProject";

const App = () => {
  const routs = createHashRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "verify-account", element: <VerifyAccount /> },
        { path: "forget-pass", element: <ForgetPass /> },
        { path: "reset-pass", element: <ResetPass /> },
        { path: "change-pass", element: <ChangePass /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <MasterLayout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "", element: <Dashboard /> },
        {
          path: "projects",
          element: <ProjectsList />,
        },
        { path: "project-data", element: <ProjectData /> },
        {
          path: "tasks",
          element: <TasksList />,
        },
        { path: "add-task", element: <TaskData /> },
        { path: "update-task/:id", element: <TaskData /> },
        { path: "users", element: <UsersList /> },
        { path: "add-project", element: <AddProject /> },
        { path: "update-project", element: <UpdateProject /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routs} />
      <ToastContainer />
    </>
  );
};

export default App;
