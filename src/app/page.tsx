import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Hero from './components/herosection/Hero'
import CurrentAuction from './components/current-auctions/CurrentAuction'
// import AuctionEnding from './components/AuctionEnding/AuctionEnding'
// import AuctionEnding from './components/AuctionEnding/AuctionEnding'
import AboutUs from './components/aboutus/AboutUs'
import PopularCategories from './components/PopularCategories/PopularCategories'
import WhatOurClientSays from './components/WhatOurClientSays/WhatOurClientSays'
// import OurApp from './components/OurApp/OurApp'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Faqs from './frequently_asked_questions/page'
import Subscribe from './components/Subscribe/Subscribe'
import OurApp from './components/OurApp/OurApp'
import FeatureLots from './components/AuctionEnding/FeatureLots'
import UpComingAuctions from './UpComingAuctions/UpComingAuctions'
import CompletedAuctions from './components/CompletedAuctions/CompletedAuctions'
import HowItWorks from './components/HowItWorks/HowItWorks'
export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center  bg-white ">
      <div className='w-full flex flex-col'>
      <Navbar/>
      <Hero/>
      <CurrentAuction/>
      <FeatureLots/>
      <UpComingAuctions/>
      <CompletedAuctions/>
      <HowItWorks/>
      <AboutUs/>
      <PopularCategories/>
      <WhatOurClientSays/>
      <OurApp/>
      <Subscribe/>
      <Footer/>
      </div>
    </main>
  )
}
