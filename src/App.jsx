import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./_auth/authLayout";
import LoginPage from "./_auth/loginPage";
import SignupPage from "./_auth/signupPage";
import StudentPage from "./_root/StudentPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="/student" element={<StudentPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
