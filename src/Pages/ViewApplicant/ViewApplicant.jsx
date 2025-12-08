import React, { useContext } from "react";
import { Card, CardContent, Chip, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
    User,
    Mail,
    Phone,
    Briefcase,
    MapPin,
    Tag,
    DollarSign,
    Star,
    FileText,
    ArrowLeft,
    Download,
    Calendar
} from "lucide-react";
import { JobContext } from "../../Context";

const ViewApplicant = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { applicantList } = useContext(JobContext);
    const applicant = applicantList.find((a) => a.id === Number(id));
    
    if (!applicant)
        return <h1 className="text-red-600 p-10">Applicant not found.</h1>;

    return (
        <div className="p-6 md:p-10">
            {/* BACK BUTTON */}
            <Button
                onClick={() => navigate("/applicants")}
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
                Back to Applicants
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
                    {/* NAME */}
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight flex items-center gap-3">
                        <User /> {applicant.name}
                    </h1>

                    {/* STATUS + CATEGORY */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <Chip
                            label={applicant.status}
                            color={applicant.status === "Pending" ? "warning" : "success"}
                            className="font-bold"
                            sx={{ padding: "4px 6px" }}
                        />
                        <Chip
                            label={applicant.category}
                            variant="outlined"
                            className="font-semibold"
                            sx={{ padding: "4px 6px" }}
                        />
                    </div>

                    {/* DETAILS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <DetailItem icon={<Mail />} label="Email" value={applicant.email} />
                        <DetailItem icon={<Phone />} label="Phone" value={applicant.phone} />

                        <DetailItem icon={<Briefcase />} label="Applied Position" value={applicant.position} />
                        <DetailItem icon={<Calendar />} label="Applied Date" value={applicant.date} />

                        <DetailItem icon={<MapPin />} label="Area of Residence" value={applicant.areaOfResidence} />
                        <DetailItem icon={<Tag />} label="Source" value={applicant.source} />

                        <DetailItem icon={<DollarSign />} label="Current Salary" value={applicant.currentSalary} />
                    </div>

                    {/* TAGS */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-gray-800">
                            <Tag size={22} /> Tags
                        </h2>
                        <div className="flex gap-2 flex-wrap">
                            {applicant.tags.map((tag, i) => (
                                <Chip
                                    key={i}
                                    label={tag}
                                    sx={{
                                        background: "#4d179a",
                                        color: "white",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* WHY FIT */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-gray-800">
                            <Star size={18} /> Why This Candidate Is a Good Fit
                        </h2>
                        <p className="text-gray-700 bg-white/60 p-4 rounded-xl backdrop-blur shadow-sm leading-relaxed">
                            {applicant.whyFit}
                        </p>
                    </div>

                    {/* RESUME */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-gray-800">
                            <FileText size={18} /> Resume
                        </h2>

                        <Button
                            variant="contained"
                            startIcon={<Download />}
                            sx={{
                                background: "#4d179a",
                                borderRadius: "12px",
                                textTransform: "none",
                                fontWeight: "600",
                            }}
                            onClick={() => console.log("Download:", applicant.resume)}
                        >
                            Download Resume
                        </Button>
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

export default ViewApplicant;
