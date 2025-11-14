import React, { useState } from "react";
import { CirclePlus } from "lucide-react";
import { motion } from "motion/react";
import { useTodoStore } from "../store/useTodoStore";

function TodoForm() {

    const [input, setInput] = useState("")
    const addTodo = useTodoStore((state)=>state.addTodo)

    const handleSubmit = (e) => {
        
        if (input.trim()){
        addTodo(input);
        setInput("")}
    }
    
  return (
    <div className="justify-evenly flex items-center font-bold p-2  mt-0 md:mt-35 max-w-2xl w-[calc(100vw-10%)] gap-4 border-slate-400 dark:border-slate-700 border-2 rounded-xl bg-slate-300 dark:bg-slate-900">
      <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()
        }

        className="font-[Doto]  font-bold outline-none bg-slate-200 dark:bg-slate-700 text-sm  w-full rounded-lg p-2 placeholder:px-2"
        placeholder={`Learn Something`}
      />
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className=" text-slate-200 dark:text-slate-700 p-2 bg-slate-400 dark:bg-slate-200  rounded-lg"
      >
        {" "}
        <CirclePlus className="size-5" />{" "}
      </motion.button>
    </div>
  );
}

export default TodoForm;
