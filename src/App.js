import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Category } from "./components/Food/Category";
import { Trending } from "./components/Food/Trending";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-foods-transparant">
        <NavBar />
        <Hero />
      </div>
      <Category />
      <Trending />
      <Footer />
    </>
  );
}

export default App;
