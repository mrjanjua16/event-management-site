import React from "react";
import About1 from "../components/Home1/About1";
import Speaker from "../components/Home1/Speaker";
import WhatPeopleSay from "../components/About/WhatPeopleSaySection";
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import PageAbout from "../components/Main/PageAbout";

export default function About(){
    const sectionItem = [
        { label: "HOME", href: "/" },
        { label: "About", active: true }
    ];

    return(
        <>
            <PageAbout title="About" sectionItem={sectionItem} />
            <About1 />
            <Speaker />
            <WhatPeopleSay />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
        </>
    );
}