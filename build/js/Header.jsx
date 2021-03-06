import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = { menuOpen: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu(e) {
    e.preventDefault()
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <header id="header">
        <nav id="nav">
          <a href="/" id="logo">
            Cannon Falls Community&nbsp;Television
          </a>
          <ul className="site-menu">
            <li>
              <a href="/videos">Videos</a>
            </li>
            <li className={`${this.state.menuOpen ? 'menu-open' : ''}`}>
              <a id="menu-icon" href="/" onClick={this.toggleMenu}>
                <svg version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                </svg>
                <span>Menu</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a className="external" href="https://youtube.com/cannonfallstv">
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a className="external" href="http://cannonfallsmn.gov">
                    City Website
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
