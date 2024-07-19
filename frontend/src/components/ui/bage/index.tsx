type Style =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "neutral"
  | "accent";

type BadgeProps = {
  text: string;
  style?: Style;
  isOutlined?: boolean;
};

const Badge = ({ text, style, isOutlined }: BadgeProps) => {
  return (
    <span className={`badge badge-${style} ${isOutlined && "badge-outline"}`}>
      {text}
    </span>
  );
};

export default Badge;
