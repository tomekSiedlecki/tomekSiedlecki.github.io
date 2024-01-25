import NavbarChoice from "./NavbarChoice"
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {

    

    return (
      <div className="bg-white d-flex flex-row justify-content-center py-2">
            <NavbarChoice text="projects"/>
            <NavbarChoice text="writing"/>
            <NavbarChoice text="about"/>
      </div>
    );
  }
  
  
  
  export default Navbar;
  