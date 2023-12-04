import Header from "./components/Header";
import Seated from "./components/Seated";
import Spotify from "./components/Spotify";

function App() {
  return (
    <>
      <div className="bg-brand-background">
        <Header />
        <div className="mt-10 md:mt-16 container p-6">
          <div className="flex items-center justify-center mb-4">
            <a
              href="https://www.waxbodega.com/categories/arms-length"
              className="w-full img-overlay"
              target="_blank"
            >
              <div className="img-overlay__text">ARM'S LENGTH</div>
              <img className="w-full rounded-lg" src="/armslength.jpg" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://www.waxbodega.com/categories/carly-cosgrove"
              className=" img-overlay"
              target="_blank"
            >
              <div className="img-overlay__text">CARLY COSGROVE</div>
              <img className="rounded-lg" src="/carly.jpg" />
            </a>
            <a
              href="https://www.waxbodega.com/categories/ben-quad"
              className="img-overlay"
              target="_blank"
            >
              <div className="img-overlay__text">BEN QUAD</div>
              <img className="rounded-lg" src="/quad.jpg" />
            </a>
            <a
              href="https://www.instagram.com/saturdaysatyourplace/?hl=en"
              className="img-overlay"
              target="_blank"
            >
              <div className="img-overlay__text">SATURDAYS AT YOUR PLACE</div>
              <img className="rounded-lg" src="/saturday.jpg" />
            </a>
          </div>
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
