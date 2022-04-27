import "./App.css";
import ButtonCallSWR from "./components/ButtonCallSWR";
import InputContent from "./components/InputContent";
import MuiBasicTable from "./components/table/MuiBasicTable";
import MuiDataGrid from "./components/table/MuiDataGrid";

function App() {
  return (
    <div className="App">
      <div className="right">
        <MuiBasicTable />
        <MuiDataGrid />
      </div>
      <div className="left">
        <ButtonCallSWR />
        <InputContent />
      </div>
    </div>
  );
}

export default App;
