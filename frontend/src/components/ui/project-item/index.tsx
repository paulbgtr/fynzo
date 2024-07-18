import { Link } from "react-router-dom";

const ProjectItem = ({ name }: { name: string }) => {
  return (
    // todo: add useful link
    <Link className="transition-opacity duration-300 hover:opacity-80" to="/">
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-name">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
