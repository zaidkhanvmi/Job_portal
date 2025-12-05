import {
    FunnelChart,
    Funnel,
    LabelList,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { Card, CardContent } from "@mui/material";

const MonthlyFunnel = ({ data }) => {
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
                    Monthly Conversion Funnel
                </h2>

                <div className="w-full h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <FunnelChart>
                            <Tooltip
                                contentStyle={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    border: "1px solid #e0d4f7",
                                }}
                                labelStyle={{ color: "#4d179a" }}
                            />

                            <Funnel
                                dataKey="value"
                                data={data}
                                fill="#4d179a"
                                stroke="#4d179a"
                            >
                                <LabelList
                                    position="right"
                                    fill="#4d179a"
                                    stroke="none"
                                    dataKey="name"
                                />
                            </Funnel>
                        </FunnelChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default MonthlyFunnel;