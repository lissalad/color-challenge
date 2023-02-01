export default function Swatch(props) {
  const color = "#" + props.color;
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="swatch"
    ></div>
  );
}
