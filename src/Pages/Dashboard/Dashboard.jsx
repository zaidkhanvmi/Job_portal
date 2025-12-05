import React from 'react'
import { CustomizeBarShape, CustomizeLabels, Step1, Step2, Step3, MassBarChart } from '../../Components/Charts/Learning'
import ApplicationsChart from '../../Components/Charts/ApplicationsChart';
import JobStatusPieChart from '../../Components/Charts/JobStatusPieChart';
import WeeklyApplicants from '../../Components/Charts/WeeklyApplicants';
import ApplicantsByCategory from '../../Components/Charts/ApplicantsByCategory';
import MonthlyFunnel from '../../Components/Charts/MonthlyFunnel';

const Dashboard = () => {

  const applicationData = [
    { month: "Jan", applications: 40 },
    { month: "Feb", applications: 55 },
    { month: "Mar", applications: 30 },
    { month: "Apr", applications: 70 },
    { month: "May", applications: 50 },
    { month: "Jun", applications: 90 },
  ];

  const jobStatusData = [
    { name: "Active", value: 12 },
    { name: "Closed", value: 5 },
    { name: "Paused", value: 3 },
    { name: "Draft", value: 4 },
  ];

  const weeklyApplicants = [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 35 },
    { name: "Thu", value: 55 },
    { name: "Fri", value: 70 },
    { name: "Sat", value: 65 },
    { name: "Sun", value: 90 },
  ];

  const categoryData = [
    { category: "Engineering", count: 120 },
    { category: "Marketing", count: 80 },
    { category: "Design", count: 50 },
    { category: "HR", count: 30 },
    { category: "Finance", count: 40 },
  ];

  const funnelData = [
    { name: "Visitors", value: 12000 },
    { name: "Signed Up", value: 5400 },
    { name: "Applied", value: 2900 },
    { name: "Shortlisted", value: 1200 },
    { name: "Hired", value: 340 }
  ];

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-1.5 gap-y-5'>
        <ApplicationsChart data={applicationData} />
        <JobStatusPieChart data={jobStatusData} />
        <WeeklyApplicants data={weeklyApplicants} />
        <ApplicantsByCategory data={categoryData} />
        <MonthlyFunnel data={funnelData} />
      </div>
    </>
  )
}

export default Dashboard