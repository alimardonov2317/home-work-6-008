import React from 'react'
import Hero from './Hero'
import HomeAbout from './HomeAbout'
import Header from '../../components/header/Header'

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <HomeAbout />
        </>
    )
}

export default Home