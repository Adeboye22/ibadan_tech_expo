import './Ticket.css'
import Tickets from '../assets/tickets/tickets.svg'

const Ticket = () => {
  return (
    <div className='tickets'>
      <h1 className='tickets-h1'>Tickets</h1>
      <hr className='tickets-hr'/>
      <div className='tickets-col-1'>
        <div className='tickets-col-1-a'>
            <span className='tickets-col-1-a-span'><strong>Grab Your Exclusive Tickes <br /> Now At An Unbeatable Price!</strong></span>
            <p className='tickets-col-1-a-p'>Secure your preferred ticket now and immerse yourself in the world of tech innovation, networking with industry experts, and the chance to win exciting tech gadgets.
            </p>
        </div>
        <div className='tickets-col-1-b'><img src={Tickets} alt="" className='tickets-col-1-img'/></div>
      </div>
    </div>
  )
}

export default Ticket
