import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo1.gif'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ background: '#5e17eb' }}
      >
        <div className="container">
          <div className="navbar-brand" style={{ margin: '0 auto' }}>
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Caster Community" style={{ width: '500px', outline: '2px solid #5e17eb', outlineOffset: '-2px' }} />
            </Link>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar
