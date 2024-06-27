import { Layout } from "@/components/layouts/dashboard-layout";
import { ProjectItem } from "@/components/routes/dashboard/project-item";

const Projects = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
      <ProjectItem title="Proj" description="proj desc" />
    </div>
  );
};

export const Dashboard = () => {
  return (
    <Layout>
      <Projects />
    </Layout>
  );
};
