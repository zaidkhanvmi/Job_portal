import { Card, CardContent } from "@mui/material";
import { TrendingUp, TrendingDown, Users, Briefcase, CheckCircle } from "lucide-react";

const KPISection = ({ stats }) => {
    const iconMap = {
        applications: <Users size={26} className="text-[#4d179a]" />,
        jobsPosted: <Briefcase size={26} className="text-[#4d179a]" />,
        conversions: <CheckCircle size={26} className="text-[#4d179a]" />,
        growth: <TrendingUp size={26} className="text-[#4d179a]" />,
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 w-full">
            {stats.map((kpi, index) => (
                <Card
                    key={index}
                    className="
                        rounded-3xl p-4 shadow-lg backdrop-blur-xl 
                        bg-white/10 border border-white/20 flex items-center gap-4
                    "
                >
                    <CardContent className="flex flex-col gap-1 p-0">
                        <div className="flex items-center gap-3">
                            {iconMap[kpi.id]}
                            <p className="text-sm text-gray-700 font-medium">{kpi.label}</p>
                        </div>

                        <p className="text-2xl font-bold primary-color">{kpi.value}</p>

                        <p
                            className={`text-sm font-semibold ${kpi.trend >= 0 ? "text-green-600" : "text-red-500"
                                }`}
                        >
                            {kpi.trend >= 0 ? (
                                <span className="flex items-center gap-1">
                                    <TrendingUp size={16} /> +{kpi.trend}%
                                </span>
                            ) : (
                                <span className="flex items-center gap-1">
                                    <TrendingDown size={16} /> {kpi.trend}%
                                </span>
                            )}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default KPISection;
