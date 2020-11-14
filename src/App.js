//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Nav";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>COVID19 DASHBOARD</h1>
      <Cards />
    </div>
  );
}
//local_total_cases = infected
//local_deaths = deaths
//local_recovered = recovered
//local_active_cases = hospitalized
export default App;
