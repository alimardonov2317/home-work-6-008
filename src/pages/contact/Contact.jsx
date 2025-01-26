import React from 'react'
import Header from '../../components/header/Header'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
            <Header backgroundHeader={"bg-[#EBF0F9]"} />
            <ContactHero />
            <ContactForm />

        </>
    )
}

export default Contact