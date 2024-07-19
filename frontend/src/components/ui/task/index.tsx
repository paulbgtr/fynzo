const Task = ({ name }: { name: string }) => {
  return (
    // todo: add link to task
    <>
      <div className="p-3 duration-200 border-2 rounded-xl hover:bg-gray-100">
        {name}
      </div>
    </>
  );
};

export default Task;
