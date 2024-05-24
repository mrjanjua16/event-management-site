import React from "react";
import Newsletter from "../../components/Home1/Newsletter";
import Footer from "../../components/Main/Footer";
import FooterMain from "../../components/Main/FooterMain";
import Map from "../../components/Home1/Map";
import PageAbout from "../../components/Main/PageAbout";
import NewsWithRightSliderSection from "../../components/OurNews/NewsWithRightSliderSection";

export default function NewsWithRightSlider()
{
    const sectionItem = [
        { label: "HOME", href: "/" },
        { label: "OUR NEWS", active: true }
        ];
    
        return(
        <>
        <PageAbout title="OUR NEWS" sectionItem={sectionItem} />
        <NewsWithRightSliderSection />
        <Newsletter />
        <Map />
        <Footer />
        <FooterMain />
        </>
        );
}