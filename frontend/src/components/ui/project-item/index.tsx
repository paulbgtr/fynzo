import { Link } from "react-router-dom";

const ProjectItem = ({ id, name }: { id: string; name: string }) => {
  return (
    // todo: add useful link
    <Link
      className="transition-opacity duration-300 hover:opacity-80"
      to={`/user/projects/${id}`}
    >
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-name">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
