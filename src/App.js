import React from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Testimonials from  './components/testimonials';
import ContactUs from './components/contactus';
import Footer from './components/footer';
import {headerData} from './portfolioData';
import {aboutData} from './portfolioData';
import {contactInfo} from './portfolioData';
import {resumeData} from './portfolioData';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header data={headerData} />
        <About data={aboutData} contactData = {contactInfo}/>
        <Resume data={resumeData}/>
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
