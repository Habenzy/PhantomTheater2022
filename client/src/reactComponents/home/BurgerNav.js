// imports for the Nav Bar -----------------
import React, {useState} from "react";
import Burger from './Burger.js'
import "./BurgerNav.css";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import Menu from 'react-burger-menu/lib/menus/slide'


// Nav Bar functionality with links to home, about , artists, season and reserve components
// class BurgerNav extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {menuOpen:false}
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     console.log('click')
//   }

//   handleStateChange(state) {
//     this.setState({menuOpen:state.isOpen})
//     console.log('handStateChange')
//   }

//   closeMenu () {
//     this.setState({menuOpen:false})
//     console.log('closeMenu')
//   }

//   toggleMenu () {
//     this.setState(state => ({menuOpen: !state.menuOpen}))
//   }

//   render() {
//     return (
//       <div className="burgerNavBar">
//         {/*menu */}
//         <Menu
//         className='menu'
//         isOpen={this.state.menuOpen} 
//         onClick={(state) => this.handleStateChange(state)}
//       >
//         <li onClick={() => this.closeMenu()}><Link to="/">Home</Link></li>
//         <li onClick={() => this.closeMenu()}><Link to="/About">About</Link></li>
//         <li onClick={() => this.closeMenu()}><Link to="/AllArtist">Featured</Link></li>
//         <li onClick={() => this.closeMenu()}><Link to="/Season">Season</Link></li>
//         <li onClick={() => this.closeMenu()}><Link to="/AllArtist">Artists</Link></li>


//         </Menu>
//       </div >

//     )
//   }
// }

const BurgerNav = (props) => {
 

  return(
    <div className="burgerNavBar">
          {/*menu */}
            <nav
            className='menu'
          >
            <li onClick={props.handleModal}><Link to="/">Home</Link></li>
            <li onClick={props.handleModal}><Link to="/About">About</Link></li>
            <li onClick={props.handleModal}><Link to="/AllArtist">Featured</Link></li>
            <li onClick={props.handleModal}><Link to="/Season">Season</Link></li>
            <li onClick={props.handleModal}><Link to="/AllArtist">Artists</Link></li>
    
    
            </nav>
          </div >
  )
}


//------export the component---------
export default BurgerNav;
