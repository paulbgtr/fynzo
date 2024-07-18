import DashboardLayout from "../../../components/layouts/dashboard-layout";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectName } = useParams();

  console.log(projectName);

  return (
    <DashboardLayout>
      <h1>Project Page</h1>
    </DashboardLayout>
  );
};

export default ProjectPage;
