import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "../../../api/projects";
import { queryClient } from "../../../app/config/queryClient";

const NewProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate({
      name: name,
      description: description,
    });

    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full input input-bordered"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full input input-bordered"
        />
        <button className="btn">Create</button>
      </div>
    </form>
  );
};

const NewProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(true)}>
      <div className="card bg-primary text-primary-content">
        <div className="text-center card-body">
          {isOpen ? (
            <NewProjectForm />
          ) : (
            <>
              <span className="text-5xl">+</span>
              <p>Create a new one</p>
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export default NewProject;
