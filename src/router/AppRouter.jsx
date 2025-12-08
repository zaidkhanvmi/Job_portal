import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Dashboard from "../Pages/Dashboard/Dashboard"
import Jobs from "../Pages/Dashboard/Jobs"
import Applicants from '../Pages/Dashboard/Applicants'
import Tags from '../Pages/Dashboard/Tags'
import Login from "../Pages/Auth/Login"
import Categories from '../Pages/Dashboard/Categories'
import JobDetails from '../Pages/View_Jobs/JobDetails'
import ViewApplicant from '../Pages/ViewApplicant/ViewApplicant'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* ALL dashboard pages go inside the Layout */}
                <Route element={<Layout />}>

                    <Route path="/" element={<Dashboard />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/view-job/:id" element={<JobDetails />} />
                    <Route path="/applicants" element={<Applicants />} />
                    <Route path="/view-applicants/:id" element={<ViewApplicant />} />
                    <Route path="/category" element={<Categories />} />
                    <Route path="/tags" element={<Tags />} />

                </Route>

                {/* Optional: auth pages */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter