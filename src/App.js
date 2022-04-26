import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "./swrhooks";
import "./App.css";

function createData(city, population2000, population2010) {
  return { city, population2000, population2010 };
}
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

function App() {
  const { data, error } = useApi();
  let rows = [];
  let rows2 = [];
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  data?.table.map((value) =>
    rows.push(
      createData(value.City, value.Population2000, value.Population2010)
    )
  );
  data?.table.map((value, index) =>
    rows2.push({
      id: index,
      City: value.City,
      Population2000: value.Population2000,
      Population2010: value.Population2010,
    })
  );
  return (
    <div className="App">
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
      <div style={{ height: 500, width: "100%", background: "white" }}>
        <DataGrid columns={columns} rows={rows2} pageSize={25} />
      </div>
    </div>
  );
}

export default App;