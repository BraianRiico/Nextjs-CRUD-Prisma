import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  const res = await fetch("http://localhost:3000/api/tasks");
  return await res.json();
}

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}
export default HomePage;
