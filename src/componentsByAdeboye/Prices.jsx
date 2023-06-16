import React from 'react'
import './Prices.css'

const Prices = () => {
  return (
    <div className='prices'>
      <span className="prices-span">Ticket prices that suit every tech enthusiast</span>
      <div className="prices-col-1">
        <div className='prices-box-1'>
         <span className="mark-zuck">MARK ZUCKERBERG</span>
         <h1 className="reg-ticket">Regular <br />Ticket</h1>
         <p className="prices-span-full-access">
            🎟️ Full Access to Live Events. Gain entry to all the exciting live events
         </p>
         <p className="prices-networking-opp">
            🤝 Networking Opportunities, Connect with like-minded individuals, industry experts, and tech enthusiasts.
         </p>
         <p className="prices-exciting-gifts">
            🎁 Exciting Gifts, As a token of our appreciation, you'll receive special gifts exclusive to 'Mark Zuckerberg' Basic Ticket holders.
         </p>
         <article className="price-btn-mark-zuck">
            <span className="price-price-mark-zuck">N1000</span>
            <button className="get-mark-zuck-ticket"><a href="https://paystack.com/pay/ibtechexpo1" target='_blank'>Get Ticket</a></button>
         </article>
        </div>
        <div className='prices-box-2'>
          <span className="elon-musk">ELON MUSK</span>
          <h1 className="vip-ticket">VIP <br />Ticket</h1>
          <p className="prices-span-exclusive-access">
            🌟 You get exclusive access to all areas of the Ibadan Tech Expo. Enjoy priority entry, ensuring you never miss a moment of the action and have the freedom to explore at your own pace.
          </p>
          <p className="prices-priority-seat">
            🪑 A Priority Seat, in the front rows with reserved seating at keynote speeches, panel discussions, and other main stage events. Get up close and personal with industry visionaries and thought leaders.
          </p>
          <p className="prices-premium-perks">
            🎁 Enjoy a range of Premium Perks exclusively available to 'Elon Musk' VIP Ticket holders. These perks may include special merchandise, exclusive access to private events, and personalized assistance from our dedicated concierge team.
          </p>
          <p className="prices-luxurious-haven">
            🍾 Relax and recharge in the VIP lounge, a luxurious haven designed for networking and relaxation.
          </p>
          <article className="price-btn-elon-musk">
            <span className="price-price-elon-musk">N20000</span>
            <button className="get-elon-musk-ticket"><a href="https://paystack.com/pay/ibtechexpo3" target='_blank'>Get Ticket</a></button>
          </article>
        </div>
        <div className='prices-box-3'>
        <span className="jeff-bezos">JEFF BEZOS</span>
          <h3 className="standard-ticket">Standard <br />Ticket</h3>
          <p className="prices-span-enhanced-access">
            🌟 Enhanced Access, Enjoy priority entry to all areas of the Ibadan Tech Expo. Skip the lines and make the most of your time exploring the event to its fullest.
          </p>
          <p className="prices-exclusive-workshops">
            📚 Exclusive Workshops, Participate in specialized workshops conducted by industry experts. Gain valuable insights, learn advanced techniques, opportunity to get qualify for a Tech Scholarship into Larva Academy
          </p>
          <p className="prices-jeff-exciting-gifts">
            🎁 Exciting Gifts, you'll receive special gifts exclusive to 'Jeff Bezos' Standard Ticket holders. These exciting gifts are carefully curated to further enhance your tech experience and provide you with valuable tech-related items.
          </p>
          <article className="price-btn-jeff-bezos">
            <span className="price-price-jeff-bezos">N5000</span>
            <button className="get-jeff-bezos-ticket"> <a href="https://paystack.com/pay/ibtechexpo2" target='_blank'>Get Ticket</a></button>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Prices
