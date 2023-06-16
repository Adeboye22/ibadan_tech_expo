// import Hero from './components/Hero'
import About from './components/About'
import Ticket from './componentsByAdeboye/Ticket'
import Sponsors from './componentsByAdeboye/Sponsors'
import Prices from './componentsByAdeboye/Prices'
import Partners from './componentsByAdeboye/Partners'
import Footer from './components/Footer'
<<<<<<< HEAD
import Speakers from './components/Speakers'
import MediaPart from './components/MediaPart'
=======
import Prizes from './componentsByAdeboye/Prizes'
>>>>>>> cc4fe37dc626b1f5150bc0efbe75e5e1612d2bd8



function App() {

  return (
    <div className='max-w-[1440px] mx-auto bg-background overflow-hidden relative'>
        {/* <Hero /> */}
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
