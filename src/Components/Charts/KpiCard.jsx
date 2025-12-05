import { Card, CardContent } from '@mui/material'

const KpiCard = ({ label, value }) => {
    return (
        <Card className="p-4 rounded-2xl shadow-sm border">
            <CardContent className="flex flex-col gap-1 p-0">
                <span className="text-sm text-gray-500">{label}</span>
                <span className="text-2xl font-bold">{value}</span>
            </CardContent>
        </Card>
    )
}

const KpiSection = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <KpiCard label="Total Jobs" value={stats.totalJobs} />
            <KpiCard label="Active Jobs" value={stats.activeJobs} />
            <KpiCard label="Applications" value={stats.applications} />
            <KpiCard label="Shortlisted / Rejected" value={`${stats.shortlisted} / ${stats.rejected}`} />
        </div>
    );
};

export default KpiSection
