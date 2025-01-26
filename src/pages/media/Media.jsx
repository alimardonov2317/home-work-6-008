import React from 'react'
import MediaHero from './MediaHero'
import Header from '../../components/header/Header'
import MediaNews from './MediaNews'
import Footer from '../../components/footer/Footer'

const Media = () => {
    return (
        <>
            <Header backgroundHeader={"bg-[#EFF7F2]"} />
            <MediaHero />
            <MediaNews />
            <Footer />
        </>
    )
}

export default Media