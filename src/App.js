import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="bg-[#F9F9F9] flex flex-col items-stretch pt-7 pb-12 px-16">
      <span className="flex flex-col mb-48 mx-11">
        <Header/>
        <Navigation/>
        <Content/>
        <FAQ/>
      </span>
    </div>
  );
}

export default App;