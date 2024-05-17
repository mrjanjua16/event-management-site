import './App.scss';
import Navbar from './components/Navbar';
import Banner1 from './components/Banner1';
import About1 from './components/About1';
import Speaker from './components/Speaker';
import Event from './components/Event';
import Registration from './components/Registration';
import Getticket from './components/Getticket';
import BuyTicket from './components/BuyTicket';
import Sponsors from './components/Sponsors';
import EventNews from './components/EventNew';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner1 />
      <About1 />
      <Speaker />
      <Event />
      <Registration />
      <Getticket />
      <BuyTicket />
      <Sponsors />
      <EventNews />
      <Newsletter />
    </div>
  );
}

export default App;
