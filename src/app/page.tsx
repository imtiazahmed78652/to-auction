import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <main className="w-full grid place-items-center bg-white ">
      <div className='w-[1920px] border-white border-2'>
      <Navbar/>
      
      <Footer/>
      </div>
    </main>
  )
}
