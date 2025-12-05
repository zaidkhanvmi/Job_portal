import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { Card, CardContent } from "@mui/material";

const WeeklyApplicants = ({ data }) => {
    return (
        <Card
            sx={{
                borderRadius: "20px",
                padding: "10px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}>
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 primary-color">
                    Weekly Growth Overview
                </h2>

                <div className="w-full h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 20, left: 0, bottom: 30 }}
                        >
                            <defs>
                                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4d179a" stopOpacity={0.4} />
                                    <stop offset="100%" stopColor="#4d179a" stopOpacity={0.05} />
                                </linearGradient>

                                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#542f8c" />
                                    <stop offset="100%" stopColor="#8548bb" />
                                </linearGradient>
                            </defs>

                            <YAxis stroke="#4d179a" opacity={0.7} />
                            <XAxis dataKey="name" stroke="#4d179a" opacity={0.7} />

                            <Tooltip
                                contentStyle={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    border: "1px solid #e0d4f7",
                                }}
                                labelStyle={{ color: "#4d179a" }}
                            />

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="url(#lineGradient)"
                                strokeWidth={3}
                                fill="url(#areaGradient)"
                                animationDuration={1400}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default WeeklyApplicants;