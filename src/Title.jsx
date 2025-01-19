export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit Reached! <b>Buy Pro Version</b>
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
