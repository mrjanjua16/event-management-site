import Banner1 from "../components/Home1/Banner1";
import About1 from "../components/Home1/About1";
import Speaker from "../components/Home1/Speaker";
import Event from "../components/Home1/Event";
import Registration from "../components/Home1/Registration";
import Getticket from "../components/Home1/Getticket";
import BuyTicket from "../components/Home1/BuyTicket";
import Sponsors from "../components/Home1/Sponsors";
import EventNews from "../components/Home1/EventNew";
import Newsletter from '../components/Home1/Newsletter';
import Maps from '../components/Home1/Map';
import Footer from '../components/Main/Footer';
import FooterMain from '../components/Main/FooterMain';

export default function Home1()
{
    return(
        <>
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
            <Maps />
            <Footer />
            <FooterMain />
        </>
    );
}