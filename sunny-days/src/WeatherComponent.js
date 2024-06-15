import sun from "./sunny.svg";
import DetailsComponent from "./DetailsComponent";

export default function WeatherComponent() {
  return (
    <div className="weather">
      <div
        className="location"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>Alexandria, VA</h1>
      </div>
      <div
        className="icon"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={sun}
          alt="icon"
          className="img-icon"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div
        className="desc"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>Sunny</h1>
      </div>
      <div
        className="temp"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
          fontSize: "30px",
          lineHeight: 0,
        }}
      >
        <h1>95&deg;</h1>
      </div>
      <DetailsComponent />
    </div>
  );
}
