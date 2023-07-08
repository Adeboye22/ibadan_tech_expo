import Hero from './components/Hero'
import Speakers from './components/Speakers'
import Venue from './components/Venue'
import Carousel from './components/Carousel'
import About from './components/About'
import Ticket from './componentsByAdeboye/Ticket'
import Sponsors from './componentsByAdeboye/Sponsors'
import Prices from './componentsByAdeboye/Prices'
import Partners from './componentsByAdeboye/Partners'
import Footer from './components/Footer'
import Prizes from './componentsByAdeboye/Prizes'
import MediaPartners from './componentsByAdeboye/MediaPartners'


function App() {

  return (
    <div className='max-w-[1500px] bg-background overflow-hidden relative'>
        <Hero />
        <About />
        <Venue />
        <Speakers />
        <Ticket />
        <Carousel />
        <Prices />
        <Prizes />
        <Sponsors />
        <Partners />
        <MediaPartners />
        <Footer />
    </div>
  )
}

export default App
