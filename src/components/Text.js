export default function Text(props) {
  return (
    <div>
      <h1>select #{props.correctColor}</h1>

      {props.guess ? <p>you guessed</p> : <p>click to guess!</p>}
    </div>
  );
}
