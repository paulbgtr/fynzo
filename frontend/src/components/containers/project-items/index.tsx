import ProjectItem from "../../ui/project-item";
import NewProject from "../../ui/new-project";
import type { Project } from "../../../types/Project";

const ProjectItems = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NewProject />
      {projects.map((project: Project) => (
        <ProjectItem key={project.id} name={project.name} />
      ))}
    </section>
  );
};

export default ProjectItems;
