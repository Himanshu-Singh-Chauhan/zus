import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoStore } from "./states/todoStore";

function App() {
  const [todo, setTodo] = useState("");
  const todoState = todoStore()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!todo) return;

    const randomid: string = uuidv4();

    todoState.addTodo({
      id: randomid,
      todo: todo, 
      isDone: false
    })

    setTodo("")
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[600px] p-3 rounded-md shadow-lg bg-slate-900">
          <h1 className="font-bold text-3xl">Todos App</h1>
          <p>Add you todo task</p>

          <form onSubmit={handleSubmit} action="">
            <div className="mt-5">
              <input
                type="text"
                className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-red-200 border border-red-100"
                placeholder="Enter your task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
