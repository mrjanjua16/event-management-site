import About2 from "../components/About2";
import Banner2 from "../components/Banner2";
import Event2 from "../components/Event2";
import EventNews from "../components/Home2/EventNews";
import TicketFeature from "../components/Home2/TicketFeature";
import Speaker2 from "../components/Speaker2";


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
        </>
);
}