import expand from "../assets/expand.png"

const FAQ = () => {
  return (
    <div>
      <div className="text-5xl font-bold tracking-wide self-stretch mt-40 bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">
        FAQ
      </div>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600">
        <div className="text-zinc-800 text-base font-semibold leading-7 my-auto">
          Can education flashcards be used for all age groups?
        </div>
        <img
          loading="lazy"
          src={expand}
          className="aspect-square object-contain object-center w-6 max-w-full cursor-pointer"
        />
      </span>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600">
        <div className="text-zinc-800 text-base font-semibold leading-7 my-auto">
          How do education flashcards work?
        </div>
        <img
          loading="lazy"
          src={expand}
          className="aspect-square object-contain object-center w-6 max-w-full cursor-pointer"
        />
      </span>
      <span className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600">
        <div className="text-zinc-800 text-base font-semibold leading-7 my-auto max-md:max-w-full">
          Can education flashcards be used for test preparation?
        </div>
        <img
          loading="lazy"
          src={expand}
          className="aspect-square object-contain object-center w-6 max-w-full cursor-pointer"
        />
      </span>
    </div>
  );
};

export default FAQ;