export default function Text(props) {
  console.log(props.guess);

  function results() {
    if (props.guess === props.correctColor) {
      return <p>Correct!</p>;
    } else {
      return <p>Wrong!</p>;
    }
  }

  return (
    <div>
      <h1>select #{props.correctColor}</h1>

      {props.guess ? results() : <p>click to guess!</p>}
    </div>
  );
}
