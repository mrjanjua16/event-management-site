import React from "react";
import Map from "../components/Home1/Map";
import Footer from "../components/Main/Footer";
import FooterMain from "../components/Main/FooterMain";
import PageAbout from "../components/Main/PageAbout";
import ContactSection from "../components/Contact/ContactSection";

export default function Contact(){
    const sectionItem = [
        { label: "HOME", href: "/" },
        { label: "CONTACT US", active: true }
    ];

    return(
        <>
            <PageAbout title="CONTACT US" sectionItem={sectionItem} />
            <ContactSection />
            <Map />
            <Footer />
            <FooterMain />
        </>
    );
}