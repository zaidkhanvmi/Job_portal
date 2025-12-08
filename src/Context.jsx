import { createContext, useState } from "react";

// export const ThemeContext = createContext('light'); // default is light 
// <ThemeContext.Provider value={{ theme, toggleTheme }}> // ThemeProvider 
// const {theme} = useContext(ThemeContext); // consuming the conext Value in the child components

export const JobContext = createContext();

const jobs = [
    {
        id: 1,
        title: "Wordpress Development",
        category: "Development",
        location: "Karachi",
        salary: "PKR 50000 - 80000",
        status: "Published",
        active: true,
        createdAt: "05-12-2025",
    },
    {
        id: 2,
        title: "Quality Assurance Specialist",
        category: "Quality Assurance",
        location: "Karachi",
        salary: "PKR 60000 - 90000",
        status: "Draft",
        active: false,
        createdAt: "02-12-2025",
    },
    {
        id: 3,
        title: "Graphic Designer",
        category: "Designer",
        location: "Nazimabad Karachi",
        salary: "PKR 80000 - 120000",
        status: "Published",
        active: true,
        createdAt: "02-12-2025",
    },
    {
        id: 4,
        title: "Seo Manager",
        category: "SEO",
        location: "Karachi",
        salary: "PKR 100000 - 160000",
        status: "Published",
        active: true,
        createdAt: "02-12-2025",
    },
];

const JobProvider = ({ children }) => {
    const [jobList, setJobList] = useState(jobs);

    return (
        <JobContext.Provider value={{ jobList }}>
            {children}
        </JobContext.Provider>
    )
}
export default JobProvider