import React from "react";
import Event from "../components/Home1/Event";
import Newsletter from "../components/Home1/Newsletter";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import Map from "../components/Home1/Map";
import PageAbout from "../components/Main/PageAbout";

export default function Schedule()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "EVENT SCHEDULE", active: true }
        ];
    
        return(
            <>
        <PageAbout title="EVENT SCHEDULE" sectionItem={sectionItem} />
        <Event />
        <Newsletter />
        <Map />
        <Footer />
        <FooterMain />
        </>
        );
}