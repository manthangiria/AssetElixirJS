import React from 'react';

const AssetElixirHomepage = () => {
  // Styles for the component
  // Note: These would ideally go in a separate .css file
  const containerStyle = {
    background: '#fff',
    '--color-text-primary': '#1a1a1a',
    '--color-text-secondary': '#555',
    '--color-text-tertiary': '#999',
    '--color-background-primary': '#fff',
    '--color-background-secondary': '#f8f8f8',
    '--color-border-primary': '#333',
    '--color-border-secondary': '#ccc',
    '--color-border-tertiary': '#e0e0e0',
    '--border-radius-md': '8px',
    '--border-radius-lg': '12px',
    fontFamily: "'DM Sans', sans-serif",
    color: 'var(--color-text-primary)',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 20px' // Added for mobile responsiveness
  };

  return (
    <div style={containerStyle} className="hp">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-header">
          <span className="nav-logo">Asset Elixir</span>
          <span className="nav-tagline">Your Life. Made Clear.</span>
        </div>
        <div className="nav-links">
          <span className="nav-link">About Us</span>
          <span className="nav-link">Services</span>
          <span className="nav-link">Insights</span>
          <span className="nav-link">Calculators</span>
          <span className="nav-link">Free Portfolio</span>
          <span className="nav-link">Contact Us</span>
          <button className="btn-dark" style={{ padding: '9px 20px', fontSize: '12px', marginLeft: '1rem' }}>
            Book a Free Call
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <span className="hero-kicker">Personal Financial Advisory</span>
        <h1>Your Life.<br /><em>Made Clear.</em></h1>
        <p className="hero-sub">The best financial advice begins with understanding <strong>you</strong> — not just your portfolio.</p>
        <p className="hero-sub2">We listen to your whole life. Your responsibilities, your health, your dreams. Then we advise with honesty and clarity. No generic solutions. No pressure. Just sound guidance from someone who genuinely cares about your future.</p>
        <button className="btn-dark" style={{ marginTop: '1.25rem' }}>Book a Free Consultation</button>
        <p className="hero-note">30 minutes. Completely free. No obligation.</p>
      </section>

      {/* MEDIA */}
      <div className="media">
        <div className="media-inner">
          <span className="media-label">Featured In</span>
          <div className="media-logos">
            <span className="media-logo">Economic Times</span>
            <span className="media-logo">The Print</span>
            <span className="media-logo">LinkedIn</span>
            <span className="media-logo">Moneycontrol</span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="stats">
        <p className="stats-label">Real relationships. Real results. Trusted by professionals, business owners, and families across India.</p>
        <div className="stats-grid">
          {[
            { num: '500+', label: 'Families advised', sub: 'and counting' },
            { num: '15+', label: 'Years of experience', sub: 'in financial planning' },
            { num: '₹5000 Cr+', label: 'Assets guided', sub: 'across portfolios' },
            { num: '98%', label: 'Client retention', sub: 'long-term relationships' }
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <p className="stat-num">{stat.num}</p>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-sub">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* WHO WE ARE */}
      <section className="whoweare">
        <div className="whoweare-grid">
          <div>
            <h2>How we work.</h2>
            <p className="body-text">We don't start with a template. We start with a conversation.</p>
            <p className="body-text">We ask about your life — your job, your health, your family, your worries, your ambitions. Because financial decisions don't exist in isolation. They're woven into the fabric of how you live.</p>
            <p className="body-text">Then we think deeply. We analyze. We stress-test your plan against different futures. And finally, we advise — always with your best interests first, never for a commission or a sale.</p>
            <p className="pullquote">"He tells you to take financial decisions, not because you want it, but because he feels it is the right one for you — considering all other things from your life."</p>
            <p className="pullquote-attr">— Client feedback</p>
          </div>
          <div className="img-block">
            <p style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', textAlign: 'center', padding: '0 20px' }}>
              Your relationship with your financial advisor should feel like having a trusted friend who knows your life and cares about your future.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* VISION & MISSION */}
      <section className="whoweare" style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '640px' }}>
          <span className="eyebrow">Our Purpose</span>
          <h2>What we believe.</h2>
          <p className="body-text"><strong>Vision:</strong> To help people build financial lives that reflect who they are and what they care about.</p>
          <p className="body-text"><strong>Mission:</strong> We listen first, understand deeply, and advise honestly. Our job is to make financial planning feel less like a burden and more like clarity — so you can move forward with confidence in the decisions that matter.</p>
        </div>
      </section>

      <hr className="divider" />

      {/* SERVICES */}
      <section className="services">
        <div className="services-head-row">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2>Comprehensive planning.<br />Personalized approach.</h2>
          </div>
        </div>
        <p className="services-intro">Whether you're just starting out, building wealth, or protecting what you've already created — we have the expertise and the empathy to guide you.</p>
        <div className="services-grid">
          <ServiceCard 
            num="01" 
            title="Wealth Planning" 
            outcome="A roadmap for your future that actually fits your life."
            desc="We craft a plan that considers your goals, your timelines, your risks, and your responsibilities. Not a generic template. A plan built for you."
          />
          <ServiceCard 
            num="02" 
            title="Investment Strategy" 
            outcome="Investments that align with your goals and risk comfort."
            desc="The right portfolio is one you can stay committed to, even when markets are uncertain. We build that together."
          />
          <ServiceCard 
            num="03" 
            title="Protection Planning" 
            outcome="Security for everything you've built and everyone who depends on you."
            desc="The right life and health coverage, chosen for your situation, so your family's future stays secure through any circumstance."
          />
        </div>
      </section>

      <hr className="divider" />

      {/* INSIGHTS */}
      <section className="reels">
        <div className="reels-head-row">
          <div>
            <span className="eyebrow">Financial Insights</span>
            <h2>Straight talk about money.</h2>
          </div>
          <button className="btn-outline">Follow on Instagram</button>
        </div>
        <p className="reels-intro">Practical perspectives on financial decisions that matter. Real conversations to help you think more clearly about money, planning, and your future.</p>
        <div className="reels-grid">
          {['Building a financial plan that actually works', 'Why insurance is about protecting your dreams', 'Staying calm when markets get uncertain', 'Planning your future with the people you love'].map((title, i) => (
            <div key={i} className="reel-card">
              <div className="reel-thumb">
                <span className="reel-tag">Insight {i + 1}</span>
                <div className="reel-play"><div className="reel-arrow"></div></div>
              </div>
              <div className="reel-info">
                <p className="reel-title">{title}</p>
                <p className="reel-topic">Financial Advice</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <span className="eyebrow">What Clients Say</span>
        <h2>People we have had the privilege of working with.</h2>
        <p className="testi-intro">The relationships we build are long-term. Our measure of success is simple — whether the people we work with feel more confident, more prepared, and more at ease about the future they are building.</p>
        <div className="testi-grid">
          <TestimonialCard 
            quote="He takes the time to understand everything — your health, your responsibilities, your life. That depth of understanding is what makes his guidance feel so personal and right for you."
            author="Working Professional"
            detail="Mumbai · Client since 2021"
          />
          <TestimonialCard 
            quote="When markets were turbulent, he kept me calm and focused on our plan. That steadiness gave me the confidence to stay the course, and it made all the difference."
            author="Business Owner"
            detail="Pune · Client since 2020"
          />
          <TestimonialCard 
            quote="He gave me the kind of honest, clear advice I had been looking for for years. It completely changed how I think about money and the decisions I make for my future."
            author="Doctor"
            detail="Mumbai · Client since 2022"
          />
        </div>
        <span className="testi-more">Read more stories</span>
      </section>

      <hr className="divider" />

      {/* CTA */}
      <section className="cta-final">
        <div className="cta-box">
          <div className="cta-top">
            <div>
              <h2>Ready to find your<br /><em>financial clarity?</em></h2>
              <p>Wherever you are in life, a thoughtful conversation about your goals, your responsibilities, and the future you want to build is always a good place to start. We would love to be part of that journey with you.</p>
            </div>
            <button className="btn-dark">Book a Free Consultation</button>
          </div>
          <div className="cta-details">
            <div>
              <p className="cta-detail-label">First Step</p>
              <p className="cta-detail-value">A 30-minute introductory call, completely free</p>
            </div>
            <div>
              <p className="cta-detail-label">What to Expect</p>
              <p className="cta-detail-value">We listen first, understand your situation, and share how we can help</p>
            </div>
            <div>
              <p className="cta-detail-label">Who It's For</p>
              <p className="cta-detail-value">Anyone ready to take their financial future seriously</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <p className="footer-brand-logo">Asset Elixir</p>
            <p className="footer-brand-tagline">Your Life. Made Clear.</p>
            <p className="footer-brand-desc">Personalised financial advisory rooted in deep listening, honest guidance, and long-term relationships. Built for professionals, families, and business owners across India.</p>
            <div className="footer-social">
              {/* LinkedIn */}
              <SocialIcon href="https://linkedin.com" iconPath="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.42v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
              {/* Instagram */}
              <SocialIcon href="https://instagram.com" iconPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </div>
          </div>

          <div>
            <span className="footer-col-title">Navigate</span>
            <a className="footer-link">About Us</a>
            <a className="footer-link">Services</a>
            <a className="footer-link">Financial Insights</a>
            <a className="footer-link">Calculators</a>
            <a className="footer-link">Free Portfolio Review</a>
          </div>

          <div>
            <span className="footer-col-title">Services</span>
            <a className="footer-link">Wealth Planning</a>
            <a className="footer-link">Investment Strategy</a>
            <a className="footer-link">Protection Planning</a>
            <a className="footer-link">Retirement Planning</a>
          </div>

          <div>
            <span className="footer-col-title">Contact Us</span>
            <ContactItem icon="phone" label="Phone" value="+91 98XXX XXXXX" />
            <ContactItem icon="mail" label="Email" value="hello@assetelixir.com" />
            <ContactItem icon="map" label="Office" value="123, Your Building Name, Mumbai" />
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <p className="footer-legal">© 2025 Asset Elixir. All rights reserved.</p>
            <p className="footer-sebi">SEBI Registered Investment Adviser · Reg. No. INAXXXXXXXXXX</p>
          </div>
          <div className="footer-legal-links">
            <span className="footer-legal-link">Privacy Policy</span>
            <span className="footer-legal-link">Terms of Use</span>
            <span className="footer-legal-link">Disclaimer</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components for cleaner JSX
const ServiceCard = ({ num, title, outcome, desc }) => (
  <div className="svc-card">
    <p className="svc-num">{num}</p>
    <p className="svc-title">{title}</p>
    <p className="svc-outcome">{outcome}</p>
    <p className="svc-desc">{desc}</p>
  </div>
);

const TestimonialCard = ({ quote, author, detail }) => (
  <div className="testi-card">
    <p className="testi-quote">"{quote}"</p>
    <div>
      <p className="testi-author">{author}</p>
      <p className="testi-detail">{detail}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, iconPath }) => (
  <a href={href} target="_blank" rel="noreferrer" className="footer-social-btn">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d={iconPath} />
    </svg>
  </a>
);

const ContactItem = ({ label, value }) => (
  <div className="footer-contact-item">
    <div className="footer-contact-icon">
      <div style={{ width: '13px', height: '13px', border: '1px solid currentColor', borderRadius: '50%' }}></div>
    </div>
    <div>
      <p className="footer-contact-label">{label}</p>
      <p className="footer-contact-value">{value}</p>
    </div>
  </div>
);

export default AssetElixirHomepage;