import React, { useContext } from "react";
import { Card, CardContent, Chip, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Briefcase,
    MapPin,
    DollarSign,
    Calendar,
    Tag,
    FileText,
} from "lucide-react";
import { JobContext } from "../../Context";

const JobDetails = () => {
    const navigate = useNavigate();
    const { jobList } = useContext(JobContext);
    const { id } = useParams();

    const job = jobList.find((j) => j.id === Number(id));

    if (!job)
        return (
            <h1 className="text-red-600 min-h-screen text-center pt-20 text-3xl">
                Job not found.
            </h1>
        );

    return (
        <div className="p-6 md:p-10">
            {/* BACK BUTTON */}
            <Button
                onClick={() => navigate("/jobs")}
                startIcon={<ArrowLeft />}
                variant="contained"
                sx={{
                    mb: 3,
                    borderRadius: "14px",
                    padding: "6px 14px",
                    textTransform: "none",
                    backgroundColor: "#4d179a"
                }}
            >
                Back to Jobs
            </Button>

            <Card
                sx={{
                    borderRadius: "30px",
                    padding: "22px",
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                }}
            >
                <CardContent>
                    {/* TITLE */}
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
                        {job.title}
                    </h1>

                    {/* STATUS + CATEGORY */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <Chip
                            label={job.status}
                            color={job.status === "Published" ? "success" : "warning"}
                            className="font-bold"
                            sx={{ padding: "4px 6px" }}
                        />
                        <Chip
                            label={job.category}
                            variant="outlined"
                            className="font-semibold"
                            sx={{ padding: "4px 6px" }}
                        />
                    </div>

                    {/* DETAILS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <DetailItem icon={<Briefcase />} label="Job Type" value="Full Time" />
                        <DetailItem icon={<MapPin />} label="Location" value={job.location} />
                        <DetailItem icon={<DollarSign />} label="Salary Range" value={job.salary} />
                        <DetailItem icon={<Calendar />} label="Posted On" value={job.createdAt} />
                        <DetailItem
                            icon={<Tag />}
                            label="Status"
                            value={job.active ? "Active" : "Draft"}
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                            <FileText size={22} /> Job Description
                        </h2>

                        <p className="text-gray-700 leading-relaxed bg-white/60 p-5 rounded-2xl shadow-md">
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
    <div className="flex items-start gap-4">
        <div className="text-indigo-600">{icon}</div>
        <div>
            <p className="text-gray-500 text-sm mb-1">{label}</p>
            <p className="font-semibold text-gray-900 text-lg">{value}</p>
        </div>
    </div>
);

export default JobDetails;
