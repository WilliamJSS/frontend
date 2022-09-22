import { BrowserRouter, Route, Routes } from "react-router-dom"

import User from '../pages/user'
import Profile from "../pages/profile"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Profile />} />
                <Route path="/update/:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}