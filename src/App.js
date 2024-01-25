import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const background = {
    backgroundColor: "#E8E8E8",
    height: "100vh"
  };

  const backgroundapp = {
    backgroundColor: "#04F49D"
  };

  return (
    <div>
      <div className="p-5" style={backgroundapp}>
        <div className="shadow-lg rounded" style={background}>
          <div ><br></br>
            <Navbar />
          </div>
          <Hello />
        </div>
      </div>
    </div>
  );
}

export default App;
