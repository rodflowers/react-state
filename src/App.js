import "./App.css";
import Flipper from "./FlipCoin/Flipper";
import Game from "./Game";
import Ball from "./lotto/Ball";
import Lottery from "./lotto/Lottery";
// import Rando from './Rando';
// import Button from './Button';
// import BrokenClick from './BrokenClick';
// import NumberSeven from './NumberSeven';
// import RollDice from "./dice/RollDice";
// import ScoreKeeper from "./state/ScoreKeeper";
import IconList from "./state/IconList";

function App() {
  return (
    <div className="App">
      {/* <Game color='Red' numer={43}/>
      <Rando maxNum={7}/>
      <Button />
      <BrokenClick />
      <NumberSeven /> */}
      {/* <RollDice /> */}
      {/* <ScoreKeeper /> */}
      {/* <IconList /> */}
      {/* <Ball num={7} /> */}
      {/* <Lottery /> */}
      {/* <Lottery title="Mini Daily" maxNum={10} numBalls={4} /> */}
      <Flipper />
    </div>
  );
}

export default App;
