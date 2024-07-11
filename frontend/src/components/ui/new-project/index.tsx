import { Link } from "react-router-dom";

const NewProject = () => {
  return (
    <Link
      to="/projects/new"
      className="transition-opacity duration-300 hover:opacity-80"
    >
      <div className="card bg-primary text-primary-content">
        <div className="text-center card-body">
          <span className="text-5xl">+</span>
          <p>Create a new one</p>
        </div>
      </div>
    </Link>
  );
};

export default NewProject;
