import React, { useContext } from "react";
import { Card, CardContent, Chip } from "@mui/material";
import { useParams } from "react-router-dom";
import {
    Briefcase,
    MapPin,
    DollarSign,
    Calendar,
    Tag,
    FileText,
} from "lucide-react";
import { JobContext } from "../../Context";

const JobDetails = () => {

    const { jobList } = useContext(JobContext);

    const { id } = useParams();
    const job = jobList.find((j) => j.id === Number(id));

    if (!job) return <h1 className="text-red-600 min-h-screen text-center">Job not found.</h1>;

    return (
        <div className="p-6 md:p-10">
            <Card
                sx={{
                    borderRadius: "24px",
                    padding: "18px",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                }}
            >
                <CardContent>
                    {/* TITLE */}
                    <h1 className="text-3xl font-bold primary-color mb-3">
                        {job.title}
                    </h1>

                    {/* STATUS + CATEGORY */}
                    <div className="flex flex-wrap gap-3 mb-5">
                        <Chip
                            label={job.status}
                            color={job.jobStatus === "Published" ? "success" : "warning"}
                            className="font-semibold"
                        />
                        <Chip
                            label={job.category}
                            variant="outlined"
                            className="font-semibold"
                        />
                    </div>

                    {/* GRID DETAILS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <DetailItem icon={<Briefcase />} label="Job Type" value="Full Time" />
                        <DetailItem icon={<MapPin />} label="Location" value={job.location} />
                        <DetailItem
                            icon={<DollarSign />}
                            label="Salary Range"
                            value={job.salary}
                        />
                        <DetailItem
                            icon={<Calendar />}
                            label="Posted On"
                            value={job.createdAt}
                        />
                        <DetailItem
                            icon={<Tag />}
                            label="Status"
                            value={job.active ? "Active" : "Draft"}
                        />
                    </div>

                    {/* DESCRIPTION CARD */}
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold mb-3 primary-color flex items-center gap-2">
                            <FileText size={20} /> Job Description
                        </h2>

                        <p className="text-gray-700 leading-relaxed bg-white/50 p-4 rounded-xl backdrop-blur-lg shadow-sm">
                            {job.description ||
                                "No description provided. Please update this job posting with a detailed description."}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const DetailItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
        <div className="text-primary-color">{icon}</div>
        <div>
            <p className="text-gray-500 text-sm">{label}</p>
            <p className="font-semibold text-gray-900">{value}</p>
        </div>
    </div>
);

export default JobDetails;
