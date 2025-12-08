import React from 'react'
import { CustomizeBarShape, CustomizeLabels, Step1, Step2, Step3, MassBarChart } from '../../Components/Charts/Learning'
import ApplicationsChart from '../../Components/Charts/ApplicationsChart';
import JobStatusPieChart from '../../Components/Charts/JobStatusPieChart';
import WeeklyApplicants from '../../Components/Charts/WeeklyApplicants';
import ApplicantsByCategory from '../../Components/Charts/ApplicantsByCategory';
import MonthlyFunnel from '../../Components/Charts/MonthlyFunnel';
import TopJobsChart from '../../Components/Charts/TopJobsChart';
import KPISection from "../../Components/Charts/KPISection";


const Dashboard = () => {

  const kpiStats = [
    { id: "applications", label: "Total Applications", value: 1240, trend: 12 },
    { id: "jobsPosted", label: "Jobs Posted", value: 42, trend: -3 },
    { id: "conversions", label: "Conversions", value: "8.4%", trend: 5 },
    { id: "growth", label: "Weekly Growth", value: "23%", trend: 9 }
  ];

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

  const topJobsChartData = [
    { title: "Senior Software Engineer", applicants: 124 },
    { title: "Product Designer", applicants: 98 },
    { title: "Marketing Manager", applicants: 74 },
    { title: "HR Specialist", applicants: 60 },
    { title: "Finance Analyst", applicants: 45 }
  ];

  return (
    <>
      <div className="space-y-6">

        {/* KPI Section */}
        <KPISection stats={kpiStats} />

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
          <ApplicationsChart data={applicationData} />
          <JobStatusPieChart data={jobStatusData} />
          <WeeklyApplicants data={weeklyApplicants} />
          <ApplicantsByCategory data={categoryData} />
          <MonthlyFunnel data={funnelData} />
          <TopJobsChart data={topJobsChartData} />
        </div>
      </div>
    </>
  )
}

export default Dashboard