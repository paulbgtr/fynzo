type Size = "sm" | "md" | "lg" | "xl";

const Loading = ({ size }: { size?: Size }) => {
  return (
    <span className={`loading loading-ball loading-${size ?? "md"}`}></span>
  );
};

export default Loading;
