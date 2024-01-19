import headerlogo from '../assets/headerlogo.png'

function Header() {
  return (
    <div className="self-stretch flex w-full items-center justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
      <img alt=""
        loading="lazy"
        src={headerlogo}
        className="aspect-[4.9] object-contain object-center w-[191px] overflow-hidden shrink-0 max-w-full my-auto"
      />
      <span className="items-stretch self-stretch flex justify-between gap-10 max-md:max-w-full max-md:flex-wrap">
        <span className="items-stretch self-center flex justify-between gap-8 my-auto">
          <button className="text-[#3A3740] text-lg">Home</button>
          <button className="text-[#3A3740] text-lg">Flashcard</button>
          <button className="text-[#3A3740] text-lg">Contact</button>
          <button className="text-[#3A3740] text-lg self-center my-auto">FAQ</button>
        </span>
        <button className="text-white text-lg font-medium whitespace-nowrap justify-center items-stretch px-10 py-3 rounded-[32px] bg-gradient-to-b from-[#06286E] to-[#164EC0]">
          Login
        </button>
      </span>
    </div>
  );
}
export default Header;