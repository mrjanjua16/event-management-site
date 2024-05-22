import React from "react";
import SpeakerDetailSection from "../components/SpeakerDetail/SpeakerDetailSection";
import SpeakerDesSection from "../components/SpeakerDetail/SpeakerDesSection";
import Newsletter from "../components/Home1/Newsletter";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import Map from "../components/Home1/Map";


export default function SpeakerDetail()
{
    return(
        <>
        <SpeakerDetailSection />
        <SpeakerDesSection />
        <Newsletter />
        <Map />
        <Footer />
        <FooterMain />
        </>
    );
}