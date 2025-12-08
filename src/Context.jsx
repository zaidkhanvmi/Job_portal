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

const applicants = [
    {
        id: 1,
        name: "Xenos Pacheco",
        email: "usman1@gmail.com",
        phone: "19078742834",
        position: "Back End Developer",
        date: "02-12-2025",
        status: "Pending",
        category: "Development",
        areaOfResidence: "Minima qui qui et do",
        source: "Google",
        currentSalary: "51,000 PKR",
        tags: ["Remote", "On-site"],
        whyFit: "Vel aut animi et ipsum quia dolores voluptate sed esse eos odit illum vero consequat Molestias lorem cupidatat",
        resume: "resume_MySQL_Cheatsheet_2.pdf", // You can link this to an actual file in your app
    },
    {
        id: 2,
        name: "Maria Torres",
        email: "maria.torres@gmail.com",
        phone: "19283746539",
        position: "Front End Developer",
        date: "01-12-2025",
        status: "Approved",
        category: "Development",
        areaOfResidence: "Amet est aut dolore",
        source: "LinkedIn",
        currentSalary: "60,000 PKR",
        tags: ["Remote", "Freelance"],
        whyFit: "Exercitationem deleniti et officiis sunt qui veniam tempora aliquam consequatur veritatis minima.",
        resume: "resume_FrontEnd_Developer.pdf",
    },
    {
        id: 3,
        name: "Ali Rehman",
        email: "ali.rehman@example.com",
        phone: "19876543210",
        position: "SEO Specialist",
        date: "03-12-2025",
        status: "Pending",
        category: "SEO",
        areaOfResidence: "Karachi, Pakistan",
        source: "Indeed",
        currentSalary: "80,000 PKR",
        tags: ["On-site"],
        whyFit: "Ali is an SEO expert with over 5 years of experience in driving organic traffic to websites.",
        resume: "resume_SEO_Specialist.pdf",
    },
];


const JobProvider = ({ children }) => {
    const [jobList, setJobList] = useState(jobs);
    const [applicantList, setApplicantsList] = useState(applicants);

    return (
        <JobContext.Provider value={{ jobList, applicantList }}>
            {children}
        </JobContext.Provider>
    )
}
export default JobProvider