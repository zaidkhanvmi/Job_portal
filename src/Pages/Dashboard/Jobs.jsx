import React, { useContext } from 'react'
import JobsTable from '../../Components/Tables/JobsTable'
import { JobContext } from '../../Context';

const Jobs = () => {

  const rows = [
    {
      id: 1,
      title: "Wordpress Development",
      category: "Development",
      location: "Karachi",
      salary: "PKR 50000 - 80000",
      status: "Published",
      createdAt: "05-12-2025",
    },
    {
      id: 2,
      title: "Quality Assurance",
      category: "Quality Assurance",
      location: "Karachi",
      salary: "PKR 60000 - 90000",
      status: "Draft",
      createdAt: "02-12-2025",
    },
    {
      id: 3,
      title: "Graphic Designer",
      category: "Designer",
      location: "Nazimabad Karachi",
      salary: "PKR 80000 - 120000",
      status: "Published",
      createdAt: "02-12-2025",
    },
    {
      id: 4,
      title: "Seo Manager",
      category: "SEO",
      location: "Karachi",
      salary: "PKR 100000 - 160000",
      status: "Published",
      createdAt: "02-12-2025",
    }
  ];


  return (
    <div>
      <JobsTable />
    </div>
  )
}

export default Jobs