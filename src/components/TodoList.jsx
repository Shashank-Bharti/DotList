import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useTodoStore } from "../store/useTodoStore";
import { useFilterStore } from "../store/useFilterStore";

function TodoList() {
  const alltodos = useTodoStore((state) => state.todos);
  const remainingTodos = alltodos.filter((todo) => !todo.completed);

  const filterMode = useFilterStore((state) => state.filterMode);
  

  return (
    <div className=" bg-slate-300 dark:bg-slate-900 flex flex-col gap-4 p-2 overflow-y-auto scroll-smooth hide-scrollbar container h-screen max-w-2xl w-[calc(100vw-10%)] rounded-2xl">
      {filterMode === "all" ? (
        alltodos.length === 0 ? (
          <span className="place-self-center text-center text-xl font-[Doto] font-bold text-slate-700">
            No Tasks
          </span>
        ) : (
            
          alltodos.map((todos) => <TodoItem key={todos.id} todo={todos} />)
        )
      ) : remainingTodos.length === 0 ? (
        <span className="place-self-center text-center text-xl font-[Doto] font-bold text-slate-700">
          No Remaining Tasks
        </span>
      ) : (
        remainingTodos.map((todos) => <TodoItem key={todos.id} todo={todos} />)
      )}
    </div>
  );
}

export default TodoList;
