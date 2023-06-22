import Hero from './components/Hero'
import Speakers from './components/Speakers'
import Venue from './components/Venue'
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
    <div className='max-w-[1440px] mx-auto bg-background overflow-hidden relative'>
        <Hero />
        <About />
        <Venue />
        <Speakers />
        <Ticket />
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
