import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useTestHook from "../../hooks/useTestHook";

const columns = [
  {
    field: "City",
    headerAlign: "left",
    width: 360,
    headerClassName: "data-grid-header-weight",
  },
  {
    field: "Population2000",
    headerAlign: "right",
    width: 320,
    headerClassName: "data-grid-header-weight",
  },
  {
    field: "Population2010",
    headerAlign: "right",
    width: 320,
    headerClassName: "data-grid-header-weight",
  },
];

const MuiDataGrid = () => {
  const rows = [];
  const { data, error } = useTestHook();
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  data?.table.map((value, index) =>
    rows.push({
      id: index,
      City: value.City,
      Population2000: value.Population2000,
      Population2010: value.Population2010,
    })
  );
  return (
    <div style={{ height: 500, background: "white" }}>
      <h1>MuiDataGrid</h1>
      <DataGrid columns={columns} rows={rows} pageSize={25} />
    </div>
  );
};

export default MuiDataGrid;
