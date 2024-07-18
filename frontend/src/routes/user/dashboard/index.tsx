import Loading from "../../../components/ui/loading";
import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import ProjectItems from "../../../components/containers/project-items";
import { fetchAllProjects } from "../../../api/projects";

const Dashboard = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchAllProjects,
  });

  return (
    <DashboardLayout>
      <header className="mb-3 space-y-2">
        <h2 className="text-5xl font-bold">Hey there!</h2>
        <p className="text-lg">Here are your projects:</p>
      </header>

      {isLoading ? <Loading /> : <ProjectItems projects={projects} />}
    </DashboardLayout>
  );
};

export default Dashboard;
