import React from 'react'
import Header from '../../components/header/Header'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import Footer from '../../components/footer/Footer'

const Contact = () => {
    return (
        <>
            <Header backgroundHeader={"bg-[#EBF0F9]"} />
            <ContactHero />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact