import "./App.css";
import MuiBasicTable from "./components/table/MuiBasicTable";
import MuiDataGrid from "./components/table/MuiDataGrid";

function App() {
  return (
    <div className="App">
      <div className="right">
        <MuiBasicTable />
        <MuiDataGrid />
      </div>
      <div className="left"></div>
    </div>
  );
}

export default App;
