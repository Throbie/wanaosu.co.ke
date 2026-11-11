
import React, { useState } from "react";
import "./App.css";
import avatar from "./avatar.png";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // CHANGE THESE
  const WHATSAPP = "254708229079";
  const PAYBILL = "";
  const ACCOUNT = "WANAOSU";

  const pages = {
    home: {
      title: "What We Do",
      text: "Wanaosu is your trusted technology partner. We provide end-to-end ICT solutions that keep your business operating."
    },
    services: " 🧠 Expert Systems & Decision Support,  ⚙️ System Integration & API Solutions .",
    about: "We are a Kenyan tech company ready to do business with everyone - individuals, SMEs, and corporates.",
  };

  const strategies = [
    
    { t: "Github", d: "github.com." },
    { t: "Twitter", d: "xB" },
    { t: "Youtube", d: "Youtube" },
  ];

  return (
    <div className="site">
        <header className="top-nav" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px 0'}}>
    <img 
      src={process.env.PUBLIC_URL + "/logo.png"} 
      alt="Wanaosu Logo" 
      style={{width: '280px', maxWidth: '90%', height: 'auto'}}
    />
  </header>

      

      <div className="main-grid">
        {/* LEFT - INTRO + BUSINESS MESSAGE */}
        <main className="left">
          <div className="business-banner">
            <span>🔵 OPEN FOR BUSINESS</span>
            <h1>We Are Ready To Do Business With You!</h1>
            <p>At <strong>Wanaosu</strong>, we are open and ready to partner with <strong>many people</strong> - individuals, startups, SMEs and corporates. If it involves <strong>Technology</strong>, we are your growth partner. We make technology work for your business.</p>
          </div>

          <div className="content-card">
            <h2>{pages[activeTab]?.title || activeTab}</h2>
            {activeTab === 'home' ? (
              <>
                <p>We keep your operations running with affordable, reliable ICT solutions.</p>
                <ul>
                  <li>☁️ Cloud Backup & Business Emails Setup </li>
                  <li>🤖 AI Chatbots & Customer Assistants@💳 Business POS </li>
                  <li>🔒 Cyber Security ,Data Protection,Software Solutions</li>
                  <li>📱 Custom Software & Mobile Apps</li>
                  <li>🚀 Cloud Migration & Virtual Offices </li>
                </ul>
                <div className="cta">
                  <h3>Let's Dive into Tech Future Together</h3>
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
        <h2>Find us on our Socials</h2>
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
        </div>
        <div className="copy">© 2026 wanaosu | Built in | Ready for Business Technology Solutions</div>
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