import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
export default function CountButton({ type, setCount }) {
  return (
    <button
      onClick={() => {
        setCount((prev) => {
          if (type === "plus") {
            const value = prev + 1;
            if (value > 5) {
              return 5;
            }
            return value;
          } else {
            const value = prev - 1;
            if (value < 0) {
              return 0;
            }
            return value;
          }
        });
      }}
      className="count-btn"
    >
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
