//import logo from './logo.svg';
import './App.css';
import Front from './Components/Front';
import image from './Components/ball.jpeg';
import icon from './Components/bell.jpeg';
import man from './Components/man2.jpeg';
import home from './Components/home.jpeg';
import graph from './Components/graph2.jpeg';
import cont from './Components/contact2.jpeg';
import bar from './Components/bar2.jpeg';
import table from './Components/table2.jpeg';
import shut from './Components/shut.jpeg';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Front photo={image} log={icon} mn={man} hm={home} gr={graph} con={cont} br={bar} tab={table} sh={shut} dis={<Form/>} />
    </div>
  );
}

export default App;
