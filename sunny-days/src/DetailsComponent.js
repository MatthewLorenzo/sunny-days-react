export default function DetailsComponent(props) {
  console.log(props.weatherData);
  console.log(props.weatherData.city);
  return (
    <div
      className="details"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: `linear-gradient(to right,
        rgba(254, 254, 254, 0.2),
        rgba(254, 254, 254, 0.2)`,
        borderRadius: "20px",
        height: "25vh",
        marginTop: "5%",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginTop: 3, marginBottom: 3 }}>
        Feels Like: {props.weatherData.feelsLike}&deg; F
      </h3>
      <h3 style={{ marginTop: 3, marginBottom: 3 }}>
        High: {props.weatherData.high}&deg; F
      </h3>
      <h3 style={{ marginTop: 3, marginBottom: 3 }}>
        Low: {props.weatherData.low}&deg; F
      </h3>
      <h3 style={{ marginTop: 3, marginBottom: 3 }}>
        Humidity: {props.weatherData.humidity}%
      </h3>
    </div>
  );
}
