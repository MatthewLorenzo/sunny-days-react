import "./App.css";
import search from "./search.svg";
import sun from "./sunny.svg";

function App() {
  return (
    <div className="page-container">
      <div className="info-container">
        <div className="searchbar">
          <img src={search} alt="search" className="search-img" />
        </div>
        <div className="main-container">
          <div className="location">
            <h1>Alexandria, VA</h1>
          </div>
          <div className="icon">
            <img src={sun} alt="icon" className="img-icon" />
          </div>
          <div className="desc">
            <h1>Sunny</h1>
          </div>
          <div className="temp">
            <h1>95&deg;</h1>
          </div>
          <div className="details">
            <p>
              adding drop down with different options like preciptation chart,
              view wind speeds, sunrise/sunset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
