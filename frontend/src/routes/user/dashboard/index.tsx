import DashboardLayout from "../../../components/layouts/dashboard-layout";
import ProjectItems from "../../../components/containers/project-items";

const projects = [
  {
    id: 1,
    title: "Project 1",
  },
  {
    id: 2,
    title: "Project 2",
  },
  {
    id: 3,
    title: "Project 3",
  },
  {
    id: 4,
    title: "Project 4",
  },
  {
    id: 5,
    title: "Project 5",
  },
  {
    id: 6,
    title: "Project 6",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <header className="mb-3 space-y-2">
        <h2 className="text-5xl font-bold">Hey there!</h2>
        <p className="text-lg">Here are your projects:</p>
      </header>

      <ProjectItems projects={projects} />
    </DashboardLayout>
  );
};

export default Dashboard;
