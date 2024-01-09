import React from 'react'
import Login from '../Pages/Login'
import Analytics from '../Components/Analytics'
import Dashboard from '../Components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import PrivatePage from '../Pages/PrivatePage'
import RegisterPage from '../Pages/RegisterPage'
import SingleProduct from '../Pages/SingleProduct'
const Home = () => {
    return (
        <Routes>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/product/singleproduct/:id' element={<PrivatePage> <SingleProduct /> </PrivatePage>} />
            <Route path='/dashboard' element={<PrivatePage> <Dashboard /> </PrivatePage>} />
            <Route path='/analytics' element={<PrivatePage> <Analytics /> </PrivatePage>} />
        </Routes>)

}

export default Home