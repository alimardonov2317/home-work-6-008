import React from 'react'
import Hero from './Hero'
import HomeAbout from './HomeAbout'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <HomeAbout />
            <Footer />
        </>
    )
}

export default Home