export type BadgeStyle =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "neutral"
  | "accent"
  | "ghost";

type BadgeProps = {
  style?: BadgeStyle;
  isOutlined?: boolean;
  children: React.ReactNode;
};

const Badge = ({
  style = "neutral",
  isOutlined = false,
  children,
}: BadgeProps) => {
  return (
    <span
      className={`badge badge-${style} ${isOutlined ? "badge-outline" : ""}`}
    >
      {children}
    </span>
  );
};

export default Badge;
