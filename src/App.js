import './App.scss';
import Navbar from './components/Navbar';
import Banner1 from './components/Banner1';
import About1 from './components/About1';
import Speaker from './components/Speaker';
import Event from './components/Event';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner1 />
      <About1 />
      <Speaker />
      <Event />
      <Registration />
    </div>
  );
}

export default App;
