import React from "react";
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import WhatPeopleSay from "../components/About/WhatPeopleSaySection";
import PageAbout from "../components/Main/PageAbout";

export default function Testimonal()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "OUR TESTIMONIAL", active: true }
    ];

    return(
        <>
            <PageAbout title="OUR TESTIMONIAL" sectionItem={sectionItem} />
            <WhatPeopleSay />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
        </>
    );
}