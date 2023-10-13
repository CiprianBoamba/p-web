import './App.css';
import { Button } from '@material-tailwind/react';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Simple React Typescript Tailwind Sample
        </h1>
        <Button>Button</Button>
      </div>
    </div>
  );
}

export default App;
