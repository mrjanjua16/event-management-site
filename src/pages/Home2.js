import About2 from "../components/About2";
import Banner2 from "../components/Banner2";
import Event2 from "../components/Event2";
import Getticket from "../components/Getticket";
import EventNews from "../components/Home2/EventNews";
import Gallery from "../components/Home2/Gallery";
import MapView from "../components/Home2/MapView";
import TicketFeature from "../components/Home2/TicketFeature";
import Speaker2 from "../components/Speaker2";
import Map from "../components/Map";
import Footer from "../components/Footer";
import FooterMain from "../components/FooterMain";


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