import { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import CountButtons from "./CountButtons";
export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <CountButtons setCount={setCount} />
    </div>
  );
}
