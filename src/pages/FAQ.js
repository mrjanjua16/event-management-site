import React from "react";
import Newsletter from "../components/Home1/Newsletter";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import PageAbout from "../components/Main/PageAbout";
import FAQSection from "../components/FAQ/FAQSection";


export default function FAQ()
{
    const sectionItem = [
        { label: "HOME", href: "index.html" },
        { label: "FAQ", active: true }
        ];
    
        return(
            <>
            <PageAbout title="FAQ" sectionItem={sectionItem} />
            <FAQSection />
            <Newsletter />
            <Map />
            <Footer />
            <FooterMain />
            </>
        );
}