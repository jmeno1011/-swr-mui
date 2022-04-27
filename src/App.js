import "./App.css";
import Component1 from "./components/Component1";
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
        <Component1 />
      </div>
    </div>
  );
}

export default App;
