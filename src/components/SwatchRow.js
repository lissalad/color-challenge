import Swatch from "./Swatch";

export default function SwatchRow(props) {
  return (
    <div id="swatches">
      {props.colors.map((c, key) => (
        <Swatch color={c} key={key} setGuess={props.setGuess} />
      ))}
    </div>
  );
}
