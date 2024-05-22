import About2 from "../components/Home2/About2";
import Banner2 from "../components/Home2/Banner2";
import Event2 from "../components/Home2/Event2";
import Getticket from "../components/Home1/Getticket";
import EventNews from "../components/Home2/EventNews";
import Gallery from "../components/Home2/Gallery";
import MapView from "../components/Home2/MapView";
import TicketFeature from "../components/Home2/TicketFeature";
import Speaker2 from "../components/Home2/Speaker2";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";


export default function Home2()
{
    return(
        <>
            <Banner2 />
            <About2 />
            <Speaker2 />
            <Event2 />
            <TicketFeature />
            <EventNews />
            <Gallery />
            <Getticket />
            <MapView />
            <Footer />
            <FooterMain />
        </>
);
}