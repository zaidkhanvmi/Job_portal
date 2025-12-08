import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";
import { Star, Eye } from "lucide-react";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ApplicantsTable = ({ data }) => {
    const navigate = useNavigate();

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
        },
        {
            field: "position",
            headerName: "Applied Position",
            flex: 1,
            renderCell: (params) => (
                <p className="font-semibold text-gray-800">{params.value}</p>
            ),
        },
        {
            field: "date",
            headerName: "Applied Date",
            flex: 1,
        },

        // ✅ UPDATED STATUS COLUMN (Dropdown)
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: (params) => (
                <select
                    value={params.value}
                    onChange={(e) =>
                        params.api.setEditCellValue({
                            id: params.id,
                            field: "status",
                            value: e.target.value,
                        })
                    }
                    className="border rounded-md px-2 py-1 text-sm focus:outline-primary-color"
                    style={{ background: "white" }}
                >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
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
            <h2 className="text-xl primary-color font-semibold mb-3">
                All Applicants ({data.length})
            </h2>

            <div style={{ height: 450, width: "100%" }}>
                <DataGrid
                    rows={data}
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
            </div>
        </Card>
    );
};

export default ApplicantsTable;