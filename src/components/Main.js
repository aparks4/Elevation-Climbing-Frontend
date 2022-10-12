import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import RouteIndex from '../pages/RouteIndex';
import RouteDetail from '../pages/RouteDetail';

function Main() {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/routes' element={<RouteIndex />} />
                <Route path='/routes/:id' element={<RouteDetail />} />
            </Routes>
        </>
    )
}

export default Main;

