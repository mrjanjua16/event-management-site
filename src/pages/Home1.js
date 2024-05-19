import Banner1 from "../components/Banner1";
import About1 from "../components/About1";
import Speaker from "../components/Speaker";
import Event from "../components/Event";
import Registration from "../components/Registration";
import Getticket from "../components/Getticket";
import BuyTicket from "../components/BuyTicket";
import Sponsors from "../components/Sponsors";
import EventNews from "../components/EventNew";
import Newsletter from '../components/Newsletter';
import Maps from '../components/Map';
import Footer from '../components/Footer';
import FooterMain from '../components/FooterMain';

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