import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- เพิ่ม
import './index.css';

interface EnergyP2PTradingProps {}

const EnergyP2PTrading: React.FC<EnergyP2PTradingProps> = () => {

    const navigate = useNavigate(); // <-- เพิ่ม

  const handleContactClick = () => {
    // Handle contact button click
    console.log('Contact button clicked');
  };

  const handleLoginClick = () => {
    console.log('Login button clicked');
    setTimeout(() => {
      navigate('/authentication/login'); // <-- ใช้ path ไปที่ login
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo"></div>
        <nav className="nav">
          <a 
            href="#solution" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('solution');
            }}
          >
            Solution
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
          <button className="login-btn" onClick={handleLoginClick}>
            login
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Energy P2P<br />Trading
            </h1>
            <h2>By god</h2>
            <p className="hero-description">
              เราเป็นผู้นำทางด้านเทคโนโลยีบล็อกเชนโดยใช้อุปกรณ์ให้ดันยิ่งขึ้นและพัฒนาความสำเร็จ 
              ได้เปิดตัวแพลตฟอร์ม JNFT เป็น NFT บริษัทได้แพลตฟอร์มที่เหล่าสติปัญญาและผู้ตอแสงท
            </p>
            <button className="contact-btn" onClick={handleContactClick}>
              Contact Us
            </button>
          </div>
          <div className="logobody"></div>
        </section>

        {/* Solutions Section */}
        <section className="solutions" id="solution">
          <h2>
            Our<br />Solution
          </h2>
          <div className="solution-cards">
            <div className="solution-card">
              <h3>
                Smart Contract<br />
                <span className="highlight">Development</span>
              </h3>
              <p>
                We develop Smart contracts that perform efficiently on both private 
                and public blockchain network. These smart contracts present themselves 
                with the extreme degree of precision.
              </p>
            </div>
            <div className="solution-card">
              <h3>
                Public/Private<br />
                Blockchain<br />
                <span className="highlight">Development</span>
              </h3>
              <p>
                We offer the development of both Private and Public Blockchain based 
                on the requirements of the users. Public Blockchain are accessible to 
                general public to drive more traffic. Private Blockchain will prohibit 
                the general public to take part in the trade through the use of private 
                pass keys.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-logo"></div>
          <div className="contact-info">
            <h3>Contact us</h3>
            <p>
              Tokantine Co.,Ltd<br />
              59/765 Suan Koon Village, Moo 7, Suan Suen, Muaeng Chonburi, 
              Chonburi, 20000 TAX<br />
              ID: 0 2055 63073 76 4<br />
              support@tokantine.co
            </p>
          </div>
        </div>
        <div className="copyright">
          © Copyright 2025 - P2P Co.,Ltd. All rights reserved.
        </div>
      </footer>
    </div>
    
  );
  
};

export default EnergyP2PTrading;