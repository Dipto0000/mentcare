import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Services from "./Pages/Services/Services.jsx";
import Appointment from "./Pages/Appointment/Appointment.jsx";
import Doctors from "./Pages/Doctors/Doctors.jsx";
import Review from "./Pages/Review/Review.jsx";
import SingleDoctorDetails from "./Pages/Doctors/SingleDoctor/SingleDoctor.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index={true} path="/" element={<Home />} />
    <Route path="/services" element={<Services/>} />
    <Route path="/appointment" element={<Appointment/>} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctor-detail/:id" element={<SingleDoctorDetails/>} />
    <Route path="/review" element={<Review/>} />
    <Route path="*" element={<h1>Sorry, the page is not available</h1>} />

  </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
