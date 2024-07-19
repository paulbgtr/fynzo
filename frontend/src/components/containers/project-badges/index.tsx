import type { Status, Mood } from "../../../types/Project";
import { MoodBadge } from "../../ui/badges/mood-badge";
import { StatusBadge } from "../../ui/badges/status-badge";

const ProjectBadges = ({ mood, status }: { mood: Mood; status: Status }) => {
  return (
    <div className="flex flex-row gap-2">
      {mood && <MoodBadge mood={mood} />}
      {status && <StatusBadge status={status} />}
    </div>
  );
};

export default ProjectBadges;
