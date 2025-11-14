import React, { useState } from "react";
import { Square, SquarePen, Trash2, SquareCheck,Save } from "lucide-react";
import { useTodoStore } from "../store/useTodoStore";
import { motion } from "motion/react";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const updateTodo = useTodoStore((state) => state.editTodo);

  const handleSave = () => {
    if (editedText.trim()) {
      updateTodo(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`p-2 ${
        todo.completed
          ? "bg-slate-400 dark:bg-slate-950"
          : "bg-slate-200 dark:bg-slate-700"
      }   items-center flex gap-2  rounded-lg`}
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => toggleTodo(todo.id)}
        className={`${
          todo.completed
            ? "text-slate-300 dark:text-slate-200"
            : "dark:text-slate-200 text-slate-400"
        }`}
      >
        {todo.completed ? <SquareCheck /> : <Square />}
      </motion.button>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        readOnly={!isEditing}
        className={`w-full outline-none ${
          todo.completed ? "line-through text-slate-500  dark:text-slate-500" : "text-slate-600 dark:text-slate-200"
        }  text-lg p-1 font-[Doto]  font-bold`}
      />
      {isEditing ? (
                <motion.button
          onClick={handleSave}
          whileTap={{ scale: 0.95 }}
          className={`p-2 ${
            todo.completed
              ? " hidden"
              : " bg-slate-400 dark:hover:bg-slate-300 hover:bg-slate-500 dark:bg-slate-200"
          } text-slate-200 dark:text-slate-900 rounded-md `}
        >
          <Save className="size-4.5" />{" "}
        </motion.button>
      ):(
                <motion.button
          onClick={()=>setIsEditing(true)}
          whileTap={{ scale: 0.92 }}
          className={`p-2 ${
            todo.completed
              ? " hidden"
              : " bg-slate-400 hover:bg-slate-500 dark:hover:bg-slate-300 dark:bg-slate-200"
          } text-slate-200 dark:text-slate-900 rounded-md `}
        >
          <SquarePen className="size-4.5" />{" "}
        </motion.button>
      )}
      

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-400 hover:bg-red-500 py-2 px-1 text-red-100  dark:text-red-100 rounded-md"
      >
        <Trash2 className="size-4.5" />{" "}
      </motion.button>
    </div>
  );
}

export default TodoItem;
