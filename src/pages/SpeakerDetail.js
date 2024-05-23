import React from "react";
import SpeakerDesSection from "../components/SpeakerDetail/SpeakerDesSection";
import Newsletter from "../components/Home1/Newsletter";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import Map from "../components/Home1/Map";
import PageAbout from "../components/Main/PageAbout";

export default function SpeakerDetail()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "SPEAKER DETAIL", active: true }
        ];
    
        return(
            <>
        <PageAbout title="SPEAKER DETAIL" sectionItem={sectionItem} />
        <SpeakerDesSection />
        <Newsletter />
        <Map />
        <Footer />
        <FooterMain />
        </>
    );
}