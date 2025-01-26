import React from 'react'
import MediaHero from './MediaHero'
import Header from '../../components/header/Header'
import MediaNews from './MediaNews'

const Media = () => {
    return (
        <>
            <Header backgroundHeader={"bg-[#EFF7F2]"} />
            <MediaHero />
            <MediaNews />
        </>
    )
}

export default Media