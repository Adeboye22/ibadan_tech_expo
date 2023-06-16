import Hero from './components/Hero'
import About from './components/About'
import Ticket from './componentsByAdeboye/Ticket'
import Sponsors from './componentsByAdeboye/Sponsors'
import Prices from './componentsByAdeboye/Prices'
import Partners from './componentsByAdeboye/Partners'
import Footer from './components/Footer'
import Speakers from './components/Speakers'
import MediaPart from './components/MediaPart'
import Prizes from './componentsByAdeboye/Prizes'



function App() {

  return (
    <div className='max-w-[1440px] mx-auto bg-background overflow-hidden relative'>
        <Hero />
        <About />
        <Speakers />
        <Ticket />
        <Prices />
        <Prizes />
        <Sponsors />
        <Partners />
        <MediaPart />
        <Footer />
    </div>
  )
}

export default App
