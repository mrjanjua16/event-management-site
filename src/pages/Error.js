import React from "react";
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import PageAbout from "../components/Main/PageAbout";
import FAQSection from "../components/FAQ/FAQSection";
import ErrorSection from "../components/Error/ErrorSection";


export default function Error()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "Error Page", active: true }
        ];
    
        return(
            <>
            <PageAbout title="Error Page" sectionItem={sectionItem} />
            <ErrorSection />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
            </>
        );
}