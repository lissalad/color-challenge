import Swatch from "./Swatch";

export default function SwatchRow(props) {
  return (
    <div id="swatches">
      {props.colors.map((c) => (
        <Swatch color={c} />
      ))}
    </div>
  );
}
