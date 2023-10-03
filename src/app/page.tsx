import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Hero from './components/herosection/Hero'
import CurrentAuction from './components/current-auctions/CurrentAuction'
// import AuctionEnding from './components/AuctionEnding/AuctionEnding'
import AuctionEnding from './components/AuctionEnding/AuctionEnding'
import AboutUs from './components/aboutus/AboutUs'
import PopularCategories from './components/PopularCategories/PopularCategories'
import WhatOurClientSays from './components/WhatOurClientSays/WhatOurClientSays'
import OurApp from './OurApp/OurApp'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Faqs from './components/Faqs/Faqs'
import Subscribe from './components/Subscribe/Subscribe'
export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center  bg-white ">
      <div className='w-full flex flex-col'>
      <Navbar/>
      <Hero/>
      <CurrentAuction/>
      {/* <AuctionEnding/> */}
      <AuctionEnding/>
      <AboutUs/>
      <PopularCategories/>
      <WhatOurClientSays/>
      <OurApp/>
      <GetInTouch/>
      <Faqs/>
      <Subscribe/>
      <Footer/>
      </div>
    </main>
  )
}
