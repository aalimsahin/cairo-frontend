import {Storage, Name, Counter, Starknet} from "./components";

function App() {
  return (
    <div>
      Hello, starknet!
      <Storage/>
      <Counter/>
      <Name/>
      <hr/>
      <Starknet/>
    </div>
  );
}

export default App;
