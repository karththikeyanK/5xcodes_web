import React from 'react';
import 'App.css';
// Import your logo (replace with your actual logo path)
import logo from './logo.png'; 

function App() {
  return (
    <div className="App">
      {/* Header with Logo */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="5Xcodes Logo" className="logo-img" />
            <span className="logo-text">5Xcodes</span>
          </div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="brand">5Xcodes</span></h1>
          <p className="tagline">🚀 Complete Technology Solutions for Your Business</p>
          <p className="intro">
            We specialize in call masking, SMS masking, cloud applications, POS systems, 
            and web applications. Our solutions protect customer data while ensuring 
            seamless business operations.
          </p>
          <div className="highlight">Secure • Reliable • Efficient</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📞</div>
            <h3>Call Masking</h3>
            <p>Protect customer and driver numbers with our advanced call masking technology.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>SMS Masking</h3>
            <p>Send booking confirmations and notifications while keeping numbers private.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">☁️</div>
            <h3>Cloud Applications</h3>
            <p>Scalable cloud solutions that grow with your business needs.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>POS Systems</h3>
            <p>Modern point-of-sale systems with integrated payment processing.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Web Applications</h3>
            <p>Custom web solutions tailored to your specific business requirements.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h3>API Integration</h3>
            <p>Seamless integration of our solutions with your existing systems.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions">
        <h2>Industry Solutions</h2>
        <div className="solutions-content">
          <div className="solution-item">
            <div className="solution-text">
              <h3>For Booking Platforms</h3>
              <p>Our specialized solutions for booking and reservation systems include:</p>
              <ul>
                <li>Secure customer-driver communication channels</li>
                <li>Booking confirmation messages via SMS</li>
                <li>Real-time notification services</li>
                <li>Payment integration and processing</li>
                <li>Customer data protection</li>
              </ul>
            </div>
            <div className="solution-image">
              <div className="image-placeholder">📱 Booking System Visualization</div>
            </div>
          </div>
          
          <div className="solution-item reverse">
            <div className="solution-text">
              <h3>Retail & Hospitality</h3>
              <p>Complete solutions for retail stores and hospitality businesses:</p>
              <ul>
                <li>Modern POS systems with inventory management</li>
                <li>Customer relationship management tools</li>
                <li>Multi-location business support</li>
                <li>Sales analytics and reporting</li>
                <li>Integrated payment processing</li>
              </ul>
            </div>
            <div className="solution-image">
              <div className="image-placeholder">🛒 POS System Visualization</div>
            </div>
          </div>
          
          <div className="solution-item">
            <div className="solution-text">
              <h3>Business Applications</h3>
              <p>Custom solutions designed to streamline your operations:</p>
              <ul>
                <li>Cloud-based business management systems</li>
                <li>Custom web application development</li>
                <li>Mobile app development for iOS and Android</li>
                <li>Legacy system modernization</li>
                <li>API development and integration</li>
              </ul>
            </div>
            <div className="solution-image">
              <div className="image-placeholder">💼 Business App Visualization</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <h2>Ready to transform your business with our solutions?</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-details">
              <a href="tel:+94768954797">+94 76 895 4797</a>
              <a href="tel:+94756079000">+94 75 607 9000</a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:hello@5xcodes.com">hello@5xcodes.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">5Xcodes</div>
        <p>Complete technology solutions for modern businesses</p>
        <p>©️ {new Date().getFullYear()} 5Xcodes (PVT) LTD. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;