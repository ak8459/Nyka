import React from 'react'
import Login from '../Pages/Login'
import Analytics from '../Components/Analytics'
import Dashboard from '../Components/Dashboard'
import { Route, Routes } from 'react-router-dom'
const Home = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/analytics' element={<Analytics />} />
        </Routes>
    )
}

export default Home