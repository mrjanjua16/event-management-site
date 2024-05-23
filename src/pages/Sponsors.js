import React from "react";
import Newsletter from "../components/Home1/Newsletter";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import Map from "../components/Home1/Map";
import PageAbout from "../components/Main/PageAbout";
import Sponsors from "../components/Home1/Sponsors";

export default function SponsorsPage()
{
    const sectionItem = [
        { label: "HOME", href: "/" },
        { label: "OUR SPONSORS", active: true }
        ];
    
        return(
        <>
        <PageAbout title="OUR SPONSORS" sectionItem={sectionItem} />
        <Sponsors />
        <Newsletter />
        <Map />
        <Footer />
        <FooterMain />
        </>
        );
}