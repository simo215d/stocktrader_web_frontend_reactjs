import Portfolio from "./Portfolio";
import Market from "./Market/Market";

function App() {
  return (
    <div className="row justify-content-md-center">
      <h1 className="text-white text-center mt-4">Paper trader</h1>
      <Portfolio />
      <Market />
    </div>
  );
}

export default App;
