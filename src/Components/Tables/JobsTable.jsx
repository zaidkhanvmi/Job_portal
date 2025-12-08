import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Switch, Card } from "@mui/material";
import { Eye, Pen } from "lucide-react";
import { JobContext } from "../../Context";
import { useNavigate } from "react-router-dom";


const JobsTable = () => {
    const { jobList } = useContext(JobContext);

    const handleToggle = (id, newValue) => {
    };

    const handleEdit = (id) => {
        console.log(`Edit job: ${id}`);
    };

    const navigate = useNavigate();

    const columns = [
        { field: "title", headerName: "Job Title", flex: 2, sortable: true },
        { field: "category", headerName: "Category", flex: 1 },
        { field: "location", headerName: "Location", flex: 1 },
        { field: "salary", headerName: "Salary", flex: 2 },
        {
            field: "status",
            headerName: "Job Status",
            flex: 1,
            renderCell: (params) => (
                <span
                    className={`px-3 py-1 text-xs rounded-full text-white ${params.value === "Published"
                        ? "bg-primary-color"
                        : "bg-gray-500"
                        }`}
                >
                    {params.value}
                </span>
            ),
        },
        {
            field: "active",
            headerName: "Active",
            flex: 1,
            renderCell: (params) => (
                <Switch
                    checked={params.active}
                    onChange={(e) => handleToggle(params.row.id, e.target.checked)}
                    sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "#4d179a", // Color for the checked state
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                            backgroundColor: "#4d179a", // Track color when checked
                        },
                    }}
                />
            ),
        },
        { field: "createdAt", headerName: "Created At", flex: 1 },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <div className="flex h-full flex-row items-center justify-start gap-1">
                    <button
                        onClick={() => navigate(`/view-job/${params.row.id}`)}
                        className="cursor-pointer primary-color rounded-md"
                    >
                        <Eye size={20} />
                    </button>

                    <button
                        onClick={() => handleEdit(params.row.id)}
                        className="cursor-pointer text-gray-500 rounded-md"
                    >
                        <Pen size="20" />
                    </button>
                </div >
            ),
        },
    ];



    return (
        <Card
            sx={{
                padding: "20px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
            }}
        >
            <h2 className="text-xl primary-color font-semibold mb-3">
                All Jobs ({jobList.length})
            </h2>
            <DataGrid
                rows={jobList}
                columns={columns}
                disableRowSelectionOnClick
                disableColumnMenu
                disableColumnResize
                pageSizeOptions={[5, 10, 25]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
            />
        </Card>
    );
};

export default JobsTable;
