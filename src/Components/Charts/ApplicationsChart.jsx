import { Card, CardContent } from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const ApplicationsChart = ({ data }) => {
    return (
        <Card
            sx={{
                borderRadius: "20px",
                padding: "10px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
        >
            <CardContent>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    📈 Applications Over Time
                </h2>

                <div style={{ width: "100%", height: 320 }}>
                    <ResponsiveContainer>
                        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                {/* Gradient Line */}
                                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#6D28D9" />
                                    <stop offset="100%" stopColor="#9333EA" />
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

                            <XAxis
                                dataKey="month"
                                stroke="#888"
                                tick={{ fontSize: 12 }}
                            />

                            <YAxis stroke="#888" tick={{ fontSize: 12 }} />

                            <Tooltip
                                contentStyle={{
                                    background: "white",
                                    borderRadius: "12px",
                                    border: "none",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                }}
                            />

                            <Line
                                type="monotone"
                                dataKey="applications"
                                stroke="url(#lineGradient)"
                                strokeWidth={3}
                                dot={{ r: 5, fill: "#9333EA" }}
                                activeDot={{ r: 7 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default ApplicationsChart;
