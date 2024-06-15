export default function DetailsComponent() {
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
      }}
    >
      <p>
        adding drop down with different options like preciptation chart, view
        wind speeds, sunrise/sunset
      </p>
    </div>
  );
}
