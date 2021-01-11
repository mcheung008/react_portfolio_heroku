import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';



import './App.css';


class App extends React.Component {
//Todo: line 30 contact email and phone needs further customizing 
  constructor(props) {
    super(props);
    this.state = {
      title: "Michael Cheung",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: "Welcome to my portfolio!",
        subTitle: "Contact me: 📧mcheung008@gmail.com --- 📱541-206-7951",
        text: "Check out some of my projects below and always feel free to contact me with any questions or critiques you may have. My door (and email) are always open."
      },
      about: {
        title: "About Me",
      },
      contact: {
          title: "Let's Chat!"
      }
    }
  }

  render() {
    return (
      <Router>

        <Container className="p-0" fluid={true}>

          <Header />

        <Navbar className="border-bottom" bg="transparent" expand="lg"> 
          <Navbar.Brand>Michael Cheung</Navbar.Brand>
          
          <Navbar.Toggle className="border-0" aria-controls="Navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>

              
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

        <Footer />

        

        </Container>

      </Router>
      );
  }
  
}

export default App;
