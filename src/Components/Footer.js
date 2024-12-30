import React from 'react';
import "../App.css"

const PricingBox = ({ name, price, features, isHighlighted }) => {
  return (
    <div className={`pricing-box ${isHighlighted ? 'highlight' : ''}`}>
      <div className="pricing-box-header">
        <div className="pricing-name">{name}</div>
        <div className="pricing-price">{price}</div>
      </div>
      <div className="pricing-box-content">
        {features.map((feature, index) => (
          <p key={index}>
            {feature.startsWith('<del>') ? (
              <del>{feature.replace(/<del>|<\/del>/g, '')}</del>
            ) : (
              feature
            )}
          </p>
        ))}
      </div>
      <div className="pricing-box-action">
        <button href="#" className="bt" style={{color:"black" , backgroundColor:"#ffaa00", border:"none", borderRadius:"30px", width:"90px", height:"45px"}}>
          Register now
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Originals',
        'Swich plans anytime',
        '<del>65+ top Live</del>',
        '<del>TV Channels</del>',
        '<del>4K Video Quality</del>',
      ],
    },
    {
      name: 'Premium',
      price: '$15.99 /month',
      features: [
        'Originals',
        'Swich plans anytime',
        'Full HD Video Quality',
        '65+ top Live',
        '<del>TV Channels</del>',
      ],
      isHighlighted: true,
    },
    {
      name: 'VIP',
      price: '$35.99 /month',
      features: [
        'Originals',
        'Swich plans anytime',
        '65+ top Live',
        'TV Channels',
        '4K Video Quality',
      ],
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="pricing">
          <div className="pricing-header">
            Fl<span className="main-color">i</span>x pricing
          </div>
          <div className="pricing-list">
            <div className="row">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="col-4 col-md-12 col-sm-12">
                  <PricingBox {...plan} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-6 col-sm-12">
            <div className="content">
              <a href="#" className="logo">
                <i className="bx bx-movie-play bx-tada main-color"></i>Fl
                <span className="main-color">i</span>x
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veniam ex quos hic id nobis beatae earum
                sapiente! Quod ipsa exercitationem officiis non error illum minima iusto et. Dolores, quibusdam?
              </p>
              <div className="social-list">
                <a href="#" className="social-item">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="social-item">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-8 col-md-6 col-sm-12">
            <div className="row">
              {['Flix', 'Browse', 'Help', 'Download app'].map((section, index) => (
                <div key={index} className="col-3 col-md-6 col-sm-6">
                  <div className="content">
                    <p>
                      <b>{section}</b>
                    </p>
                    <ul className="footer-menu">
                      {['About us', 'My profile', 'Pricing plans', 'Contacts'].map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CopyrightSection = () => {
  return <div className="copyright">Copyright 2023</div>;
};

const App = () => {
  return (
    <>
      <PricingSection />
      <Footer />
      <CopyrightSection />
    </>
  );
};

export default App;
