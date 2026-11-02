
import React, { useState } from "react";
import "./App.css";
import avatar from "./avatar.png";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // CHANGE THESE
  const WHATSAPP = "2547XXXXXXXX";
  const PAYBILL = "400200";
  const ACCOUNT = "WANAOSU";

  const pages = {
    home: {
      title: "What We Do",
      text: "Wanaosu is your trusted technology partner. We provide end-to-end ICT solutions that keep your business operating."
    },
    services: "Computer Sales & Repair, CCTV & Security, Networking, POS Systems, Web Development in React, Software Solutions.",
    about: "We are a Kenyan tech company ready to do business with everyone - individuals, SMEs, schools, and corporates.",
  };

  const strategies = [
    { t: "Affiliate Marketing", d: "Promote other companies products and earn commission per sale via your referral link." },
    { t: "Selling Products / Services", d: "Use your website as storefront for physical goods, digital downloads or services." },
    { t: "Advertising", d: "Display ads via Google AdSense. Earn on impressions or clicks. Great for high traffic." },
    { t: "Sponsored Content", d: "Collaborate with brands for paid posts and reviews." },
    { t: "Membership / Subscription", d: "Offer exclusive content behind a paywall for recurring revenue." },
    { t: "Online Courses & Webinars", d: "Sell your expertise through courses and establish authority." },
    { t: "Donations & Crowdfunding", d: "Ask loyal audience to support via Patreon or direct donations." },
    { t: "Flipping Websites", d: "Build, grow and sell websites for profit." },
  ];

  return (
    <div className="site">
      <header className="top-nav">
        <div className="logo">WANAOSU.CO.KE</div>
        <div className="tag">TECHNOLOGY BUSINESS SOLUTIONS</div>
      </header>

      <div className="main-grid">
        {/* LEFT - INTRO + BUSINESS MESSAGE */}
        <main className="left">
          <div className="business-banner">
            <span>🔵 OPEN FOR BUSINESS</span>
            <h1>We Are Ready To Do Business With You!</h1>
            <p>At <strong>Wanaosu.co.ke</strong>, we are open and ready to partner with <strong>many people</strong> - individuals, startups, dukas, schools, churches, SMEs and corporates. If it involves <strong>Technology</strong>, we are your growth partner. We make technology work for your business.</p>
          </div>

          <div className="content-card">
            <h2>{pages[activeTab]?.title || activeTab}</h2>
            {activeTab === 'home' ? (
              <>
                <p>We keep your operations running with affordable, reliable ICT solutions.</p>
                <ul>
                  <li>💻 Computer Sales, Repair & Deeply Formatted Systems</li>
                  <li>📹 CCTV Installation & 24/7 Security Monitoring</li>
                  <li>🌐 Networking, WiFi & Internet Setup</li>
                  <li>💳 Business POS, Accounting & Software Solutions</li>
                  <li>🚀 Professional React Websites - Hosted on GitHub like this one</li>
                </ul>
                <div className="cta">
                  <h3>Let's Build Your Tech Future Together</h3>
                  <p>Small hustle or big company? We have a package for you.</p>
                  <button onClick={()=>setIsChatOpen(true)}>Talk To Our Tech Team</button>
                </div>
              </>
            ) : <p>{pages[activeTab]}</p>}
          </div>
        </main>

        {/* RIGHT - RECTANGLE WITH 3 HREFS */}
        <aside className="right-rect">
          <h3>Quick Navigation</h3>
          <nav>
            <a href="#home" onClick={(e)=>{e.preventDefault(); setActiveTab('home')}}>→ What We Do</a>
            <a href="#services" onClick={(e)=>{e.preventDefault(); setActiveTab('services')}}>→ Our Services</a>
            <a href="#about" onClick={(e)=>{e.preventDefault(); setActiveTab('about')}}>→ About & Business Partnership</a>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); setActiveTab('contact')}}>→ Contact & Payment</a>
          </nav>
          <div className="rect-info">
            <p>Domain: wanaosu.co.ke</p>
            <p>Hosting: GitHub Pages</p>
            <p>Stack: React</p>
          </div>

          {activeTab === 'contact' && (
            <div className="paybill-mini">
              <h4>Lipa Na M-Pesa</h4>
              <p>Paybill: <b>{PAYBILL}</b><br/>Account: {ACCOUNT}</p>
            </div>
          )}
        </aside>
      </div>

      {/* BOTTOM HORIZONTAL BAR */}
      <section className="money-bar">
        <h2>Key Strategies to Make Money from Your Website</h2>
        <div className="money-scroll">
          {strategies.map((s,i)=>(
            <div key={i} className="money-card">
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VERY BOTTOM - PAYMENT METHODS */}
      <footer className="bottom-pay">
        <div className="pay-line">
          <strong>Secure Payments Supported:</strong>
          <span className="p saf">Safaricom Business Paybill {PAYBILL}</span>
          <span className="p">Airtel Money</span>
          <span className="p">M-Pesa Till</span>
          <span className="p">Mastercard</span>
          <span className="p">Visa</span>
          <span className="p">PayPal</span>
          <span className="p">Bank Transfer</span>
        </div>
        <div className="copy">© 2026 wanaosu.co.ke | Built in React | Hosted on GitHub | Ready for Business Technology Solutions</div>
      </footer>

      {/* WHATSAPP ZURI-STYLE BUTTON */}
      <div className="wa-widget">
        {isChatOpen && (
          <div className="wa-popup">
            <div className="wa-head">
              <img src={avatar} alt="avatar"/>
              <div><b>Wanaosu Support</b><span>We reply instantly • Tech Team Online</span></div>
              <button onClick={()=>setIsChatOpen(false)}>×</button>
            </div>
            <div className="wa-body">
              <div className="wa-msg">Hi! 👋 We are ready to do business with you. How can our technology team help?</div>
            </div>
            <a className="wa-action" href={`https://wa.me/${WHATSAPP}?text=Hello Wanaosu, I want to do business with you on technology services.`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        )}
        <button className="wa-avatar" onClick={()=>setIsChatOpen(!isChatOpen)}>
          <img src={avatar} alt="chat"/>
        </button>
      </div>
    </div>
  );
}
export default App;