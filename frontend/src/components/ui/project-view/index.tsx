import type { Project } from "../../../types/Project";
import ProjectBadges from "../../containers/project-badges";

/**
 * This component renders a project view on the project page.
 *
 * @returns A project view component
 */
const ProjectView = ({ project }: { project: Project }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">{project.name}</h2>
      <ProjectBadges mood={project.mood} status={project.status} />
    </div>
  );
};

export default ProjectView;
