import React from "react";
import Newsletter from "../../components/Home1/Newsletter";
import Footer from "../../components/Main/Footer";
import FooterMain from "../../components/Main/FooterMain";
import Map from "../../components/Home1/Map";
import PageAbout from "../../components/Main/PageAbout";
import NewsSinglePageSection from "../../components/OurNews/NewsSinglePageSection";

export default function NewsSinglePage()
{
    const sectionItem = [
        { label: "HOME", href: "/" },
        { label: "NEWS DETAILS", active: true }
        ];
    
        return(
        <>
        <PageAbout title="NEWS DETAILS" sectionItem={sectionItem} />
        <NewsSinglePageSection />
        <Newsletter />
        <Map />
        <Footer />
        <FooterMain />
        </>
        );
}