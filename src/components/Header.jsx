import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import SegmentedControl from "./SegmentedControl";
import { motion } from "motion/react";
import {useThemeStore} from "../store/useThemeStore";

function Header() {
    const {theme , toggleTheme} = useThemeStore();
    
    useEffect(() => {
        if (theme === 'dark') {
          document.querySelector('html').classList.add('dark');
        }else {
            document.querySelector('html').classList.remove('dark');
        }
   
    }, [theme])
    

  return (
    <>
      {/* Laptops */}
      <div className=" lg:block fixed font-[Doto]  justify-evenly hidden font-bold top-10 p-2 w-2xl border-slate-400 bg-slate-300 dark:border-slate-700 border-2 rounded-xl dark:bg-slate-900">
        <div className="flex justify-between items-center">
          <span className="  text-slate-700 font-black dark:text-slate-200 px-2 ">
            DotList
          </span>
          <span className=" -mt-1 -ml-20">
            <SegmentedControl />
          </span>
          <button 
          className="text-slate-200 dark:text-slate-800 flex p-1 bg-slate-400 dark:bg-slate-200 rounded-full drop-shadow-slate-500 drop-shadow-[0_0px_2px_rgba(0,0,0,0.9 )] dark:drop-shadow-slate-300 dark:drop-shadow-[0_0px_3px_rgba(0,0,0,0.4)]"
          >
            <motion.span 
            onClick={toggleTheme}
            whileTap={{ rotate: -75, scale: 1.1 }}>
                {theme === 'dark' ? <Sun/> : <Moon/>}
            </motion.span>
          </button>
        </div>
      </div>
      {/* Mobile Devices */}
      <div className=" font-[Doto]  md:hidden font-bold top-5 p-2 w-[calc(100vw-10%)]  border-slate-400 dark:border-slate-700 border-2 rounded-xl bg-slate-300  dark:bg-slate-900">
        <div className="flex flex-row justify-between items-center px-2 ">
          <span className=" text-slate-800 font-black dark:text-slate-200 px-2 ">
            DotList
          </span>
          <button className="text-slate-200 dark:text-slate-800 flex p-1 bg-slate-400 dark:bg-slate-200 rounded-full drop-shadow-slate-300 drop-shadow-[0_0px_3px_rgba(0,0,0,0.4)]">
            <motion.span 
            onClick={toggleTheme}
            whileTap={{ rotate: -75, scale: 1.1 }}>
                {theme === 'dark' ? <Sun/> : <Moon/>}
            </motion.span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
