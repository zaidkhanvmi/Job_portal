import { Card, CardContent } from "@mui/material";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

const COLORS = ["#4D179A", "#5E22B3", "#7C3AED", "#A78BFA", "#C4B5FD"];

const ApplicantsByCategory = ({ data }) => {
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
            <CardContent className="p-0">
                <h2 className="text-xl font-semibold mb-4 primary-color">
                    Applicants By Category
                </h2>

                <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                        >
                            <XAxis
                                dataKey="category"
                                stroke="#4d179a"
                                opacity={0.8}
                                tick={{ fill: "#4d179a", fontSize: 12 }}
                            />
                            <YAxis
                                stroke="#4d179a"
                                opacity={0.8}
                                tick={{ fill: "#4d179a" }}
                            />

                            <Tooltip
                                contentStyle={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    border: "1px solid #e0d4f7",
                                }}
                                labelStyle={{ color: "#4d179a" }}
                            />

                            <Bar
                                dataKey="count"
                                radius={[8, 8, 0, 0]}
                                animationDuration={1500}
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default ApplicantsByCategory;