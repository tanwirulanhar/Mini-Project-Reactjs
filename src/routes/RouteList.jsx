import DetailUser from "../pages/DetailUser";
import Home from "../pages/Home";
import HomeLogin from "../pages/HomeLogin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

export const RouteList = [
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/register",
        element : <Register/>
    },
    {
        path : "/homeLogin",
        element : (<ProtectedRoute>
            <HomeLogin/>
        </ProtectedRoute>)
    },
    {
        path : "/user/:id",
        element : (<ProtectedRoute>
            <DetailUser/>
        </ProtectedRoute>)
    },
];