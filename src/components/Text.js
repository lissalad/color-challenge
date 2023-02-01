export default function Text(props) {
  return (
    <div>
      <h2>select the matching color swatch for</h2>
      <h1>#{props.correctColor}</h1>

      {props.guess ? <p>that's a guess</p> : <p>click to guess!</p>}
    </div>
  );
}
