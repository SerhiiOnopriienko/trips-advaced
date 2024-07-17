import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "../Pages/Wrapper";
import MainPage from "../Pages/MainPage";
import TripDetails from "../Pages/TripDetails";
import Bookings from "../Pages/Bookings";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import { useNavigate } from "react-router-dom";

function RouterComponent() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, [isAuth, navigate]);

  const [formValue, setFormValue] = useState({
    "full-name": "",
    email: "",
    password: "",
  });

  const setEnteredValue = (name: string, value: string) => {
    setFormValue((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <Routes>
      <Route
        path="sign-up"
        element={
          <ProtectedRoute isAuth={!isAuth} redirectTo="/">
            <Signup formValue={formValue} setEnteredValue={setEnteredValue} />
          </ProtectedRoute>
        }
      />
      <Route
        path="sign-in"
        element={
          <ProtectedRoute isAuth={!isAuth} redirectTo="/">
            <Signin formValue={formValue} setEnteredValue={setEnteredValue} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth} redirectTo="sign-in">
            <Wrapper />
          </ProtectedRoute>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="/trip/:tripId" element={<TripDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<MainPage />} />
      </Route>
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}

export default RouterComponent;
