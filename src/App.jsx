import Header from "./components/Header";
import Seated from "./components/Seated";
import Spotify from "./components/Spotify";

function App() {
  return (
    <>
      <div className="bg-brand-background">
        <Header />
        <div className="flex flex-wrap">
          <a
            href="https://www.waxbodega.com/categories/arms-length"
            className="w-full md:w-1/2 img-overlay"
            target="_blank"
          >
            <div className="img-overlay__text">ARM'S LENGTH</div>
            <img className="w-full" src="/armslength.jpg" />
          </a>
          <a
            href="https://www.waxbodega.com/categories/carly-cosgrove"
            className="w-full md:w-1/2 img-overlay"
            target="_blank"
          >
            <div className="img-overlay__text">CARLY COSGROVE</div>
            <img className="w-full" src="/carly.jpg" />
          </a>
          <a
            href="https://www.waxbodega.com/categories/ben-quad"
            className="w-full md:w-1/2 img-overlay"
            target="_blank"
          >
            <div className="img-overlay__text">BEN QUAD</div>
            <img className="w-full" src="/quad.jpg" />
          </a>
          <a
            href="https://www.instagram.com/saturdaysatyourplace/?hl=en"
            className="w-full md:w-1/2 img-overlay"
            target="_blank"
          >
            <div className="img-overlay__text">SATURDAYS AT YOUR PLACE</div>
            <img className="w-full" src="/saturday.jpg" />
          </a>
        </div>
        <Spotify />
        <Seated />
        <footer className="bg-brand-red">
          <div className="container p-10 text-center">
            <p className="text-white font-normal">
              © 2023{" "}
              <a
                className="underline"
                target="_blank"
                href="https://www.waxbodega.com"
              >
                Wax Bodega
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
