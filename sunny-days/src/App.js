import SearchComponent from "./SearchComponent";
import WeatherComponent from "./WeatherComponent";

function App() {
  return (
    <div
      className="page-container"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(135deg, #634bc6, #9d8be9)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className="info-container"
        style={{
          placeSelf: "center",
          borderRadius: "20px",
          width: "30%",
          height: "75vh",
          backgroundImage: `linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.4),
          rgba(255, 255, 255, 0.2))`,
          backdropFilter: `blur(8px)`,
          border: `1px solid rgba(255,255, 255, 0.3)`,
          padding: "40px",
          boxShadow: `-10px 10px 10px 0px rgba(0,0,0,0.5)`,
        }}
      >
        <SearchComponent />
        <WeatherComponent />
      </div>
    </div>
  );
}

export default App;
