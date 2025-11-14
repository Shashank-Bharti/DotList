import { Header, TodoForm, TodoList } from "./components";
import SegmentedControl from "./components/SegmentedControl";

function App() {
  const year = new Date().getFullYear();
  const copyrightText = `© ${year} Shashank Bharti`;
  return (
    <>
      <div className="absolute inset-0 z-[-2] flex items-center justify-center h-screen w-screen bg-slate-400 dark:bg-slate-950 bg-[radial-gradient(#ffffff75_2px,#E2E8F0_2px)] dark:bg-[radial-gradient(#ffffff15_2px,#020618_2px)] bg-size-[36px_36px]">
        <div className="max-w-2xl box-border p-3 m-2 items-center  justify-center flex flex-col gap-5 w-full h-full text-center text-2xl dark:text-slate-200 rounded">
        <Header />
        <div className="relative font-[Doto]  md:hidden ">
          <SegmentedControl/>
        </div>
        <TodoForm/>
        <TodoList/>
        <span className="flex font-[Doto] font-bold text-xs gap-2"> <a href="https://github.com/Shashank-Bharti" target="_blank">{copyrightText}</a></span>
        </div>
      </div>
    </>
  );
}

export default App;
