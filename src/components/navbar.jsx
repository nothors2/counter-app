import React, { Component } from "react";

const NavBar = (props) => {
  return (  
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge badge-pill badge-secondary">{props.totalCounter}</span>
        </a>
      </nav>
   );
}
 
export default NavBar;

//  class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounter}</span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
