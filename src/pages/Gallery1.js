import React from "react";
import GallerySection1 from "../components/Gallery/GallerySection1";
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import PageAbout from "../components/Main/PageAbout";

export default function Gallery1()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "GALLERY", active: true }
    ];

    return(
        <>
            <PageAbout title="GALLERY" sectionItem={sectionItem} />
            <GallerySection1 />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
        </>
    );
}