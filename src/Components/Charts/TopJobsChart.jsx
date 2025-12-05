import { Card, CardContent } from "@mui/material";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const TopJobsChart = ({ data }) => {
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

                <h2 className="text-xl font-semibold mb-4 primary-color">
                    Top Performing Job Listings
                </h2>

                {/* FIXED HEIGHT WRAPPER */}
                <div style={{ width: "100%", height: 350 }}>
                    <ResponsiveContainer>
                        <BarChart
                            layout="vertical"
                            data={data}
                            margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
                        >
                            <XAxis type="number" stroke="#4d179a" opacity={0.8} />
                            <YAxis dataKey="title" type="category" stroke="#4d179a" opacity={0.8} />

                            <Tooltip
                                contentStyle={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    border: "1px solid #e0d4f7",
                                }}
                                labelStyle={{ color: "#4d179a" }}
                            />

                            <Bar
                                dataKey="applicants"
                                fill="#4d179a"
                                radius={[6, 6, 6, 6]}
                                animationDuration={1200}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default TopJobsChart;
