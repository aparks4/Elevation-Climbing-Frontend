import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import RouteIndex from '../pages/RouteIndex';
import RouteDetail from '../pages/RouteDetail';
import PrivateRoute from '../utils/PrivateRoute';
import { AuthProvider } from "../context/AuthContext";
import Login from '../pages/Login';
import ProtectedPage from '../utils/ProtectedPage';
import Register from '../pages/Register';
import VideoOptions from '../pages/VideoOptions';
import WallDetail from '../pages/WallDetail';
import Map from '../pages/Map';


function Main() {
    return (
        <>
            <Outlet />
            <Routes>
                {/* <PrivateRoute component={ProtectedPage} path='/protected' exact /> */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/videos' element={<Dashboard />} />
                <Route path='/map' element={<Map />} />
                <Route path='/videos/:id' element={<VideoOptions />} />
                <Route path='/routes' element={<RouteIndex />} />
                <Route path='/map/walls/:id' element={<WallDetail />} />
                <Route path='/routes/:id' element={<RouteDetail />} />
                <Route path='/protected' element={<ProtectedPage />} />
            </Routes>
        </>
    )
}

export default Main;

