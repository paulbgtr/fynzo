import ProjectItem from "../../ui/project-item";
import NewProject from "../../ui/new-project";

const ProjectItems = ({
  projects,
}: {
  projects: any; // todo: fix any
}) => {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NewProject />
      {projects.map((project: any) => (
        <ProjectItem key={project.id} title={project.title} />
      ))}
    </section>
  );
};

export default ProjectItems;
