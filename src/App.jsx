import Header from "./components/Header";
import Seated from "./components/Seated";
import Spotify from "./components/Spotify";

function App() {
  return (
    <>
      <div className="bg-brand-background">
        <Header />
        <div className="flex flex-wrap">
          <div className="w-1/2 img-overlay">
            <div className="img-overlay__text">ARM'S LENGTH</div>
            <img className="w-full" src="/armslength.jpg" />
          </div>
          <div className="w-1/2 img-overlay">
            <div className="img-overlay__text">CARLY COSGROVE</div>
            <img className="w-full" src="/carly.jpg" />
          </div>
          <div className="w-1/2 img-overlay">
            <div className="img-overlay__text">BEN QUAD</div>
            <img className="w-full" src="/quad.jpg" />
          </div>
          <div className="w-1/2 img-overlay">
            <div className="img-overlay__text">SATURDAYS AT YOUR PLACE</div>
            <img className="w-full" src="/saturday.jpg" />
          </div>
        </div>
        <Spotify />
        <Seated />
      </div>
    </>
  );
}

export default App;
