import './App.css';
import { Switch } from './Switch';
import { Toggle } from './Toggle';

const ToggleOn = ({on, children}: any) => on ? children : null
const ToggleOff = ({on, children}: any) => on ? null : children
const ToggleButton = ({on, toggle}: any ) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div className="App">
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  );
}

export default App;
