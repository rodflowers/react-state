import './App.css';
import Game from './Game';
// import Rando from './Rando';
// import Button from './Button';
// import BrokenClick from './BrokenClick';
// import NumberSeven from './NumberSeven';
import RollDice from './dice/RollDice';

function App() {
  return (
    <div className="App">
      {/* <Game color='Red' numer={43}/>
      <Rando maxNum={7}/>
      <Button />
      <BrokenClick />
      <NumberSeven /> */}
      <RollDice />
    </div>
  );
} 

export default App;
