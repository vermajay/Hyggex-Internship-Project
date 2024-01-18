import lightbulb from "../assets/lightbulb.png"
import volume from "../assets/volume.png"
import reload from "../assets/reload.png"
import back from "../assets/back.png"
import forward from "../assets/forward.png"
import maximize from "../assets/maximize.png"
import logo_small from "../assets/logo_small.png"
import logo from "../assets/logo.png"
import add from "../assets/add.png"
import { useState } from "react"

const Content = () => {

  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="text-3xl font-bold self-stretch mt-16
      bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text max-md:max-w-full max-md:mt-10">
        Relations and Functions ( Mathematics )
      </div>
      <div className="justify-between items-stretch self-center flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <button className="text-blue-950 text-xl font-bold whitespace-nowrap items-stretch grow pb-3.5 px-3 border-b-[3px] border-[#06286E]">
          Study
        </button>
        <button className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch pb-3.5 px-3">
          Quiz
        </button>
        <button className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch pb-3.5 px-3">
          Test
        </button>
        <button className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch grow pb-3.5 px-3">
          Game
        </button>
        <button className="text-zinc-500 text-xl font-medium whitespace-nowrap items-stretch grow pb-3.5 px-3">
          Others
        </button>
      </div>

      <span onClick={()=>setFlipped(!flipped)}
       className={`self-center flex w-[712px] max-w-full flex-col items-stretch mt-8 px-9 py-11 rounded-[42px]
      bg-gradient-to-bl from-[#051A91] via-[#2061ab] to-[#1F80EB] max-md:px-5 cursor-pointer ${flipped && "-scale-x-100"}
      transition-all duration-500`}>

        {/* flip card front */}
        <div className={`${flipped && "hidden"}`}>
          <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src={lightbulb}
              className="aspect-square object-contain object-center w-[34px] max-w-full"
            />
            <img
              loading="lazy"
              src={volume}
              className="aspect-square object-contain object-center w-[34px] max-w-full"
            />
          </div>
          <div className="text-white text-center text-4xl font-bold tracking-wider self-center mt-24 mb-28 max-md:my-10">
            9 + 6 + 7x - 2x - 3
          </div>
        </div>

        {/* flip card back */}
        <div className={`-scale-x-100 ${!flipped && "hidden"}`}>
          <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src={lightbulb}
              className="aspect-square object-contain object-center w-[34px] max-w-full"
            />
            <img
              loading="lazy"
              src={volume}
              className="aspect-square object-contain object-center w-[34px] max-w-full"
            />
          </div>
          <div className="text-white text-center text-4xl font-bold tracking-wider self-center mt-24 mb-28 max-md:my-10">
            5x + 12
          </div>
        </div>

      </span>

      <div className="items-stretch self-center flex w-[612px] max-w-full justify-between gap-5 mt-8 max-md:flex-wrap">
        <img
          loading="lazy"
          src={reload}
          className="aspect-square object-contain object-center w-[30px] max-w-full my-auto cursor-pointer"
        />
        <span className="items-center flex justify-between gap-5">
          <img
            loading="lazy"
            src={back}
            className="aspect-square object-contain object-center w-[55px] max-w-full cursor-pointer"
          />
          <div className="text-gray-800 text-2xl font-bold my-auto">01/10</div>
          <img
            loading="lazy"
            src={forward}
            className="aspect-square object-contain object-center w-[55px] max-w-full cursor-pointer"
          />
        </span>
        <img
          loading="lazy"
          src={maximize}
          className="aspect-square object-contain object-center w-[30px] max-w-full my-auto cursor-pointer"
        />
      </div>
      <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-20 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="items-stretch flex justify-between gap-5">
          <img
            loading="lazy"
            src={logo_small}
            className="aspect-square object-contain object-center w-[81px] rounded-full drop-shadow-2xl max-w-full"
          />
          <span className="justify-center items-stretch flex flex-col self-start">
            <div className="text-zinc-500 text-xs font-bold">Published by</div>
            <img
              loading="lazy"
              src={logo}
              className="object-contain object-center w-[115px] mt-3"
            />
          </span>
        </div>
        <span className="items-stretch self-center flex gap-2 my-auto">
          <img
            loading="lazy"
            src={add}
            className="aspect-square object-contain object-center w-[60px] max-w-full cursor-pointer"
          />
          <div className="text-3xl font-semibold self-center grow whitespace-nowrap my-auto bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text cursor-pointer">
            Create Flashcard
          </div>
        </span>
      </div>
    </div>
  );
};

export default Content;