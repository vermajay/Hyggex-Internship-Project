import { useState } from "react";
import expand from "../assets/expand.png"

const FAQ = () => {

  const [open1, setOpen1]  = useState(false);
  const [open2, setOpen2]  = useState(false);
  const [open3, setOpen3]  = useState(false);

  return (
    <div>
      <div className="text-5xl font-bold tracking-wide self-stretch mt-40 bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text max-md:max-w-full max-md:text-4xl max-md:mt-10">
        FAQ
      </div>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600 max-md:flex-wrap max-md:mt-10 max-md:px-5 relative">
        <div className="text-zinc-800 text-base font-semibold leading-7 my-auto pr-8">
          Can education flashcards be used for all age groups?
          <div className={`grid overflow-hidden transition-all duration-300 ease-in-out
          ${open1 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden font-normal">
              Yes, education flashcards can be tailored to different age groups and learning levels. There are
              flashcards designed for preschoolers, elementary school students, high school students, and
              even for college-level and adult learners.
            </div>
          </div>
        </div>
        <img alt=""
          onClick={()=>setOpen1(!open1)}
          loading="lazy"
          src={expand}
          className={`aspect-square object-contain object-center w-6 max-w-full cursor-pointer absolute top-5 right-6
          ${open1 && "transform -scale-y-100"} transition-all duration-500`}
        />
      </span>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600 max-md:flex-wrap max-md:mt-10 max-md:px-5 relative">
        <div className="text-zinc-800 text-base font-semibold leading-7 my-auto pr-8">
          How do education flashcards work?
          <div className={`grid overflow-hidden transition-all duration-300 ease-in-out
          ${open2 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden font-normal">
              Education flashcards work by presenting a question or prompt on one side and the
              corresponding answer or information on the other. Users can review the cards repeatedly,
              reinforcing their memory and enhancing learning through repetition.
            </div>
          </div>
        </div>
        <img alt=""
          onClick={()=>setOpen2(!open2)}
          loading="lazy"
          src={expand}
          className={`aspect-square object-contain object-center w-6 max-w-full cursor-pointer absolute top-5 right-6
          ${open2 && "transform -scale-y-100"} transition-all duration-500`}
        />
      </span>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600 max-md:flex-wrap max-md:mt-10 max-md:px-5 relative">
        <div className="text-zinc-800 text-base font-semibold leading-7 my-auto pr-8">
          Can education flashcards be used for test preparation?
          <div className={`grid overflow-hidden transition-all duration-300 ease-in-out
          ${open3 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden font-normal">
              Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key
              concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge
              before exams.
            </div>
          </div>
        </div>
        <img alt=""
          onClick={()=>setOpen3(!open3)}
          loading="lazy"
          src={expand}
          className={`aspect-square object-contain object-center w-6 max-w-full cursor-pointer absolute top-5 right-6
          ${open3 && "transform -scale-y-100"} transition-all duration-500`}
        />
      </span>
    </div>
  );
};

export default FAQ;