import React from "react";
import { Card, CardContent, Switch } from "@mui/material";
import { Eye, Star, Plus, MoreHorizontal } from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";



const CategoryTable = () => {

    const handleToggle = () => {

    }

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 2,
        },

        {
            field: "createdAT",
            headerName: "Created At",
            flex: 1,
        },

        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: (params) => (
                <Switch
                    checked={params.status}
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

        {
            field: "action",
            headerName: "Action",
            flex: 1,
            sortable: false,
            renderCell: (params) => (
                <div className="flex items-center justify-start h-full gap-2 w-full">
                    <button
                        className="cursor-pointer text-gray-500 hover:text-purple-500 transition"
                        onClick={() => console.log("Bookmark applicant", params.row.id)}
                    >
                        <Star size={18} />
                    </button>

                    {/* 👁 View */}
                    <button
                        className="cursor-pointer primary-color hover:opacity-70 transition"
                        onClick={() => navigate(`/view-applicants/${params.row.id}`)}
                    >
                        <Eye size={20} />
                    </button>
                </div>
            ),
        },
    ];

    const categories = [
        { id: 1, name: "Development", createdAT: "20-11-2025", status: "Active", active: true },
        { id: 2, name: "IT", createdAT: "20-11-2025", status: "Active", active: true },
        { id: 3, name: "Design", createdAT: "20-11-2025", status: "Inactive", active: true },
        { id: 4, name: "Marketing", createdAT: "20-11-2025", status: "Active", active: true },
        { id: 5, name: "Finance", createdAT: "20-11-2025", status: "Inactive", active: true },
        { id: 6, name: "HR", createdAT: "20-11-2025", status: "Active" },
        { id: 7, name: "Management", createdAT: "20-11-2025", status: "Active", active: true },
    ];

    return (
        <Card
            sx={{
                borderRadius: "20px",
                padding: "14px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
        >
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-xl primary-color font-semibold mb-3">
                    All Category ({categories.length})
                </h2>
                <button>Add Category</button>
            </div>

            <DataGrid
                rows={categories}
                columns={columns}
                disableColumnMenu
                disableColumnResize
                disableRowSelectionOnClick
                pageSizeOptions={[5, 10]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "rgba(77, 23, 154, 0.1)",
                        color: "#4d179a",
                        fontWeight: "bold",
                    },
                }}
            />
        </Card>
    );
}



export default CategoryTable;