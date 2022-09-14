import { BrowserRouter, Route, Routes } from "react-router-dom";

import User from '../pages/user'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}