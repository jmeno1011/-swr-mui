import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useApi from "../../hooks/swrhooks";
import { createData } from "../../utils/functions";

const MuiBasicTable = () => {
  const rows = [];
  const { data, error } = useApi();
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  data?.table.map((value) =>
    rows.push(
      createData(value.City, value.Population2000, value.Population2010)
    )
  );
  return (
    <div>
      <h1>MuiBasicTable</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell align="right">Population2000</TableCell>
              <TableCell align="right">Population2010</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.city}
                </TableCell>
                <TableCell align="right">{row.population2000}</TableCell>
                <TableCell align="right">{row.population2010}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MuiBasicTable;
