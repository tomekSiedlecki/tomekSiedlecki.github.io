// App.js
import szpitalImage from './szpital.jpg';

function App() {
  const textStyle = {
    fontSize: 30,
    textTransform: 'uppercase',
    color: 'blue', // Set your desired color
  };

  return (
    <div className="App">
      <p style={textStyle}>Wracaj do zdrowia Maja</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>napewno nie jedziesz tam</p>
      <img src={szpitalImage} alt="Szpital" />
    </div>
  );
}



export default App;
