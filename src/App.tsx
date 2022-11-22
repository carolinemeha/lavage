import "./App.css";
import Reserve from "./pages/Reserve";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <Admin/> */}
      {/* <Reserve/> */}
      <Users />
      {/* <NotFound/> */}
    </div>
  );
}

export default App;
