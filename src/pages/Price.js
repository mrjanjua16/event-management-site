import React from "react";
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import PageAbout from "../components/Main/PageAbout";
import GetTicket from "../components/Home1/Getticket";

export default function Price()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "PRICE", active: true }
        ];
    
        return(
            <>
            <PageAbout title="PRICE" sectionItem={sectionItem} />
            <GetTicket />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
            </>
        );
}