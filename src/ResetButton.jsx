import { ResetIcon } from "@radix-ui/react-icons";
export default function ResetButton({ setCount }) {
  const handleclick = () => {
    setCount(0);
  };
  return (
    <button onClick={handleclick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
