import './Prices.css';

const Prices = () => {
  // this function sends users to the regular payment gateway
  const Regular = () => {
    window.open("https://paystack.com/pay/ibtechexpo1")
  }

  // this function sends users to the VIP payment gateway
  const Vip = () => {
    window.open("https://paystack.com/pay/ibtechexpo3")
  }
  //  this function sends users to the Standard payment gateway
  const Standard = () => {
    window.open("https://paystack.com/pay/ibtechexpo2")
  }
  
  return (
    <div className='prices mx-auto' id='prices'> 
      <span className="prices-span">Ticket prices that suit every tech enthusiast</span>
      <div className="prices-col-1">
        <div className='prices-box-1'>
         <span className="mark-zuck">MARK ZUCKERBERG</span>
         <h1 className="reg-ticket">Regular <br />Ticket</h1>
         <p className="prices-span-full-access text-xs font-bold">
            🎟️ Full Access to Live Events. Gain entry to all the<br /> exciting live events
         </p>
         <p className="prices-networking-opp text-xs font-bold">
            🤝 Networking Opportunities, Connect with like- <br /> minded individuals, industry experts, and tech <br /> enthusiasts.
         </p>
         <p className="prices-exciting-gifts text-xs font-bold">
            🎁 Exciting Gifts, As a token of our appreciation, <br /> you'll receive special gifts exclusive to 'Mark <br /> Zuckerberg' Basic Ticket holders.
         </p>
         <article className="price-btn-mark-zuck">
            <span className="price-price-mark-zuck font-extrabold text-2xl">N1000</span>
            <button className="get-mark-zuck-ticket" onClick={Regular}>Get Ticket</button>
         </article>
        </div>
        <div className='prices-box-2'>
          <span className="elon-musk text-lg">ELON MUSK</span>
          <h1 className="vip-ticket font-extrabold text-3xl">VIP <br />Ticket</h1>
          <p className="prices-span-exclusive-access">
            🌟 You get exclusive access to all areas of the Ibadan Tech Expo. Enjoy priority entry, ensuring  you never miss a moment of the action and have the freedom to explore at your own pace.
          </p>
          <p className="prices-priority-seat">
            🪑 A Priority Seat, in the front rows with reserved seating at keynote speeches, panel discussions, and other main stage events. Get up  close and personal with industry visionaries and thought leaders.
          </p>
          <p className="prices-premium-perks">
            🎁 Enjoy a range of Premium Perks exclusively available to 'Elon Musk' VIP Ticket holders. These perks may include special merchandise, exclusive <br /> access to private events, and personalized assistance from our dedicated concierge team.
          </p>
          <p className="prices-luxurious-haven">
            🍾 Relax and recharge in the VIP lounge, a luxurious haven designed for networking and relaxation.
          </p>
          <article className="price-btn-elon-musk">
            <span className="price-price-elon-musk font-extrabold text-3xl">N20000</span>
            <button className="get-elon-musk-ticket" onClick={Vip}>Get Ticket</button>
          </article>
        </div>
        <div className='prices-box-3'>
        <span className="jeff-bezos">JEFF BEZOS</span>
          <h3 className="standard-ticket font-extrabold text-3xl">Standard <br />Ticket</h3>
          <p className="prices-span-enhanced-access font-bold text-xs">
            🌟 Enhanced Access, Enjoy priority entry to all areas of the Ibadan Tech Expo. Skip the lines and make the most of your time exploring the event to its fullest.
          </p>
          <p className="prices-exclusive-workshops font-bold text-xs">
            📚 Exclusive Workshops, Participate in specialized workshops conducted by industry experts. Gain valuable insights, learn advanced techniques, opportunity to get qualify for a Tech Scholarship into Larva Academy
          </p>
          <p className="prices-jeff-exciting-gifts font-bold text-xs">
            🎁 Exciting Gifts, you'll receive special gifts exclusive to 'Jeff Bezos' Standard Ticket holders. These exciting gifts are carefully curated to further enhance your tech experience and provide you with valuable tech-related items.
          </p>
          <article className="price-btn-jeff-bezos">
            <span className="price-price-jeff-bezos font-extrabold text-3xl">N5000</span>
            <button className="get-jeff-bezos-ticket" onClick={Standard}>Get Ticket</button>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Prices