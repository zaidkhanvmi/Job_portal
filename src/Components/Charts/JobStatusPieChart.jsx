import { Card, CardContent } from "@mui/material";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#6D28D9", "#9333EA", "#C084FC", "#E9D5FF"];

const JobStatusPieChart = ({ data }) => {
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
                {/* For bg glow */}
                {/* <div className="absolute inset-0 rounded-3xl bg-custom-gradient opacity-20 blur-2xl"></div> */}

                <h2 className="text-xl font-semibold mb-4 primary-color">
                    Job Status Distribution
                </h2>

                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={4}
                                stroke="none"
                            >
                                {data.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <Tooltip
                                contentStyle={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    border: "1px solid #e0d4f7",
                                }}
                                labelStyle={{ color: "#4d179a" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default JobStatusPieChart;