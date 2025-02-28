import './CSS/App.css';
import AI from './Components/AI';
import EthanHalf from './Components/EthanHalf';
import ThomasHalf from './Components/ThomasHalf';

function App() {
  return (
    <div className="App">
      <EthanHalf />
      <div style={{"display": "flex", "flexDirection": "row-reverse"}}>
        <ThomasHalf />
        <AI/>
      </div>
    </div>
  );
}

export default App;
