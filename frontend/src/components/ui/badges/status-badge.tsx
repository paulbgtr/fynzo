import type { Status } from "../../../types/Project";
import { Badge } from "./badge";

export const StatusBadge = ({ status }: { status: Status }) => {
  const style =
    status === "active"
      ? "success"
      : status === "inactive"
        ? "warning"
        : "error";

  return <Badge style={style}>{status}</Badge>;
};
