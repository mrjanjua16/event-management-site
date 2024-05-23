import React from "react";
import Newsletter from "../components/Home1/Newsletter";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import Map from "../components/Home1/Map";
import PageAbout from "../components/Main/PageAbout";
import NewsWithoutSliderSection from "../../components/OurNews/NewsWithoutSliderSection";

export default function NewsWithoutSlider()
{
    const sectionItem = [
        { label: "HOME", href: "/" },
        { label: "OUR NEWS", active: true }
        ];
    
        return(
        <>
        <PageAbout title="OUR NEWS" sectionItem={sectionItem} />
        <NewsWithoutSliderSection />
        <Newsletter />
        <Map />
        <Footer />
        <FooterMain />
        </>
        );
}