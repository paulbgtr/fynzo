import type { Mood } from "../../../types/Project";
import { UilSmileBeam, UilMeh, UilSad } from "@iconscout/react-unicons";
import { Badge } from "./badge";
import { BadgeStyle } from "./badge";

export const MoodBadge = ({ mood }: { mood: Mood }) => {
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
