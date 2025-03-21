export default function Joke(props) {
  return (
    <>
      <span>{props.setup || ""}</span>
      <h2>{props.punchline || ""}</h2>
    </>
  );
}
