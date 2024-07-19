import DashboardLayout from "../../../components/layouts/dashboard-layout";
import ProjectView from "../../../components/ui/project-view";
import { useQuery } from "@tanstack/react-query";
import { fetchProjectById } from "../../../api/projects";
import Loading from "../../../components/ui/loading";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: () => fetchProjectById(projectId),
  });

  const [project] = data || [];

  return (
    <DashboardLayout>
      {isLoading ? <Loading /> : <ProjectView project={project} />}
    </DashboardLayout>
  );
};

export default ProjectPage;
