import Hero from './components/Hero'
import Ticket from './componentsByAdeboye/Ticket'
import Sponsors from './componentsByAdeboye/Sponsors'
import Prices from './componentsByAdeboye/Prices'
import Partners from './componentsByAdeboye/Partners'
import MediaPartners from './componentsByAdeboye/MediaPartners'
import Footer from './componentsByAdeboye/Footer'


function App() {

  return (
    <div className='max-w-[1440px] mx-auto bg-background overflow-hidden relative'>
        <Hero />
        <Ticket />
        <Sponsors />
        <Prices />
        <Partners />
        <MediaPartners />
        <Footer />
    </div>
  )
}

export default App
