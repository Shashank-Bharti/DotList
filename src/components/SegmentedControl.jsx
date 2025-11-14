import React, { useId, useState } from "react";
import { motion } from "motion/react";
import { Layout } from "lucide-react";
import { useFilterStore } from "../store/useFilterStore";

function SegmentedControl() {
  const items = ["ALL TASKS", "REMAINING"];
  const [currentIdx, setCurrentIdx] = useState(0);
  
  const {filterMode , toggleFilterMode} = useFilterStore();

  const id = useId();

  return (
    <>
      <div className=" inline-flex rounded-xl p-0.5 gap-x-4w-0 shadow-inner dark:shadow-slate-900 shadow-slate-500 justify-between items-center bg-slate-400 dark:bg-slate-800">
        {items.map((item, idx) => {
          return (
            <div
            key={idx}
              className="relative text-sm hover:opacity-90 duration-200 ease-in flex min-w-3 cursor-pointer px-2 py-1"
              onClick={() => {setCurrentIdx(idx) 
                toggleFilterMode()} }
            >
            
              {currentIdx === idx ? (
                <motion.div
                  layoutId={id}
                  transition={{
                    layout: { type: "spring", stiffness: 250, damping: 25 },
                  }}
                  
                  className="absolute top-0 left-0 w-full h-full bg-slate-100 dark:bg-slate-200 shadow  rounded-[10px] transition-colors duration-300"
                />
              ) : (
                ""
              )}
              <div
                className={`px-2 z-2 ${
                  currentIdx === idx ? "text-slate-500 dark:text-slate-800" : "text-slate-300 dark:text-slate-500"
                } duration-200 font-bold `}
              >
                {item}
              </div>
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SegmentedControl;
