import type { Project } from "../../../types/Project";
import Badge from "../bage";
import type { Mood } from "../../../types/Project";
import { UilSmileBeam, UilMeh, UilSad } from "@iconscout/react-unicons";
import { BadgeStyle } from "../bage";

const MoodBadge = ({ mood }: { mood: Mood }) => {
  const getBadgeDetails = (mood: Mood) => {
    switch (mood) {
      case "happy":
        return {
          text: "happy",
          icon: <UilSmileBeam />,
          style: "success" as BadgeStyle,
        };
      case "neutral":
        return {
          text: "neutral",
          icon: <UilMeh />,
          style: "ghost" as BadgeStyle,
          isOutlined: true,
        };
      case "sad":
        return { text: "sad", icon: <UilSad />, style: "error" as BadgeStyle };
    }
  };

  const { text, icon, style, isOutlined } = getBadgeDetails(mood);
  return (
    <Badge style={style} isOutlined={isOutlined}>
      {text} {icon}
    </Badge>
  );
};

/**
 * This component renders a project view on the project page.
 *
 * @returns A project view component
 */
const ProjectView = ({ project }: { project: Project }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{project.name}</h2>
      {project.mood && <MoodBadge mood={project.mood} />}
    </div>
  );
};

export default ProjectView;
