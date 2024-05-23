import React from "react";
import GallerySection2 from "../components/Gallery/GallerySection2";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import Map from "../components/Home1/Map";
import PageAbout from "../components/Main/PageAbout";

export default function Gallery2()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "GALLERY", active: true }
        ];
    
        return(
            <>
            <PageAbout title="GALLERY" sectionItem={sectionItem} />
            <GallerySection2 />
            <Map />
            <Footer />
            <FooterMain />
        </>
    );
}