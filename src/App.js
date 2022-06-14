import './App.css';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
      <Button dashed>Dashed Button</Button>
      <Button text>Text Button</Button>
      <Button link>Link Button</Button>
    </div>
  );
}

export default App;
