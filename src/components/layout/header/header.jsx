import  React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__title">header</div>
     </div>
    )
  }
}

export default Header;
