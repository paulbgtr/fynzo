import type { Project } from "../../../types/Project";
import ProjectBadges from "../../containers/project-badges";
import TaskList from "../../containers/task-list";

/**
 * This component renders a project view on the project page.
 *
 * @returns A project view component
 */
const ProjectView = ({ project }: { project: Project }) => {
  return (
    <main>
      <article className="space-y-4">
        <header className="space-y-2">
          <h1 className="text-3xl italic font-black">{project.name}</h1>
          <ProjectBadges mood={project.mood} status={project.status} />
        </header>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">TODO</h2>
          <TaskList />
        </section>
      </article>
    </main>
  );
};

export default ProjectView;
